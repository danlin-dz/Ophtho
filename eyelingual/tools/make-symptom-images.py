#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Builds the "what do you see?" tiles, and the diplopia picker tiles.

    python3 tools/make-symptom-images.py _src/scene.jpg _src/dip.jpg

Two source photographs, because they answer different questions:

  scene.jpg  a wide view with fine linear detail — power lines, building edges.
             Blur and distortion are only legible against straight lines, so a
             soft landscape would show nothing.
  dip.jpg    a hard vertical and one bright disc against near-empty sky.
             Doubling has to be unmistakable, and soft repeating texture doubled
             just looks like more texture.

RENDERING CONVENTIONS
  - Field loss (tunnel, half, quadrant, patch) renders PALE, not black. Patients
    do not perceive missing field as darkness; the brain fills in and they
    describe things as simply absent.
  - A retinal detachment curtain renders DARK, because that is the word patients
    use — a shadow or curtain coming across.
  - Every tile is circle-masked: the convention on any field chart, and it says
    "one eye's view" without a word of text.

Worth knowing when revisiting this: Crabb et al., Ophthalmology 2013, showed
glaucoma patients renderings of their own field loss. Almost none chose a black
tunnel; most chose blurred or missing patches. Pale masking is a compromise
between that finding and legibility at thumbnail size — it reads clearly on a
2-column grid where soft blur does not. If a reviewer disagrees, the veil colour
is one constant.
"""
import os, sys, math
import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageEnhance

try:
    import pillow_heif
    pillow_heif.register_heif_opener()
except ImportError:
    pass

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "img")
SIZE = 620
BG = (13, 9, 8)
PALE = (247, 241, 232)
LOST = (24, 24, 27)     # field loss: dark grey, softened, never pure black
SEP_H, SEP_V = .155, .160   # doubling offset, as a fraction of the tile


def load_square(path, cx=0.5, cy=0.5, frac=1.0):
    """Square crop centred on (cx, cy) as fractions of the frame, with a side of
    `frac` x the shorter edge. Framing is explicit rather than automatic because
    each source has one thing that has to end up centred."""
    im = Image.open(path).convert("RGB")
    w, h = im.size
    side = int(min(w, h) * frac)
    left = int(round(cx * w - side / 2))
    top = int(round(cy * h - side / 2))
    left = max(0, min(left, w - side))
    top = max(0, min(top, h - side))
    return im.crop((left, top, left + side, top + side)).resize((SIZE, SIZE), Image.LANCZOS)


def circle_mask(size, feather=2):
    m = Image.new("L", (size * 2, size * 2), 0)
    ImageDraw.Draw(m).ellipse([0, 0, size * 2 - 1, size * 2 - 1], fill=255)
    return m.resize((size, size), Image.LANCZOS).filter(ImageFilter.GaussianBlur(feather))


def grad(fn):
    xs = np.linspace(0, 1, SIZE)
    X, Y = np.meshgrid(xs, xs)
    return Image.fromarray((np.clip(fn(X, Y), 0, 1) * 255).astype(np.uint8), "L")


def veil(base, mask, colour=PALE):
    return Image.composite(Image.new("RGB", base.size, colour), base, mask)


def lost(base, mask, blur=None, strength=.88):
    """Field loss: blurred and darkened together, with the mask's own gradient
    giving a soft edge. Two things are happening at once because that is how it
    is depicted clinically — detail goes first, then luminance — and a hard-edged
    black wedge implies a sharper boundary than patients report."""
    blur = blur if blur is not None else SIZE * .022
    merged = Image.composite(base.filter(ImageFilter.GaussianBlur(blur)), base, mask)
    return Image.composite(Image.new("RGB", base.size, LOST), merged,
                           mask.point(lambda v: int(v * strength)))


# ------------------------------------------------------------------ effects --
def f_normal(im):
    return im


def f_blur(im):
    return im.filter(ImageFilter.GaussianBlur(SIZE * 0.014))


def f_distort(im):
    """Metamorphopsia. Strongest centrally, which is where macular disease
    actually distorts, and strong enough that straight lines visibly bend."""
    a = np.asarray(im).astype(np.float32)
    n = SIZE
    ys, xs = np.mgrid[0:n, 0:n].astype(np.float32)
    r = np.sqrt((xs - n/2)**2 + (ys - n/2)**2) / (n/2)
    fall = np.clip(1 - r / 0.95, 0, 1) ** 1.1
    amp = n * 0.105
    dx = np.sin(ys / n * math.pi * 2.2) * amp * fall
    dy = np.cos(xs / n * math.pi * 1.9) * amp * fall * 0.8
    sx = np.clip(xs + dx, 0, n - 1).astype(np.int32)
    sy = np.clip(ys + dy, 0, n - 1).astype(np.int32)
    return Image.fromarray(a[sy, sx].astype(np.uint8), "RGB")


def f_faded(im):
    im = ImageEnhance.Color(im).enhance(0.25)
    im = ImageEnhance.Contrast(im).enhance(0.45)
    return Image.blend(im, Image.new("RGB", im.size, PALE), 0.34)


def f_central(im):
    return veil(im, grad(lambda X, Y: 1 - np.clip(
        (np.sqrt((X-.5)**2 + (Y-.5)**2) - .11) / .17, 0, 1)), (18, 16, 15))


def f_curtain(im):
    """One curtain, diagonal. A detachment does not advance as a tidy horizontal
    line; patients describe a shadow coming across from one upper quadrant."""
    def f(X, Y):
        edge = .78 + .05*np.sin(X*math.pi*2.3) + .03*np.sin(Y*math.pi*4.1)
        return np.clip((edge - (X*0.62 + Y*0.78)) / .11, 0, 1)
    return veil(im, grad(f), (10, 10, 12))


def f_floaters(im):
    """Vitreous opacities. Two densities, because real floaters are not uniform:
    the older specks and strands sit darker, and a second, lighter grey layer
    carries the shapes patients actually describe — squiggly worms, tangled
    cobwebs, and a ring. The ring is a Weiss ring, the detached annulus of
    glial tissue seen after a posterior vitreous detachment, and it is worth
    including precisely because a patient who recognises it has told you
    something specific.

    Everything is drawn at 2x and downsampled so edges stay soft. Floaters are
    out of focus by definition — they sit in front of the retina — so crisp
    edges would look wrong."""
    s = SIZE * 2
    rng = np.random.default_rng(7)

    # ---- layer one: the original specks and strands, darkest ---------------
    dark = Image.new("L", (s, s), 0)
    d = ImageDraw.Draw(dark)
    for _ in range(16):
        x, y = rng.uniform(.08, .92, 2) * s
        r = rng.uniform(.008, .026) * s
        d.ellipse([x - r, y - r * rng.uniform(.5, 1.4), x + r, y + r], fill=210)
    for _ in range(5):
        x, y = rng.uniform(.15, .85, 2) * s
        pts, ang = [], rng.uniform(0, math.tau)
        for _ in range(7):
            ang += rng.uniform(-.7, .7)
            x += math.cos(ang) * s * .022
            y += math.sin(ang) * s * .022
            pts.append((x, y))
        d.line(pts, fill=190, width=int(s * .006), joint="curve")
    dark = dark.resize((SIZE, SIZE), Image.LANCZOS).filter(ImageFilter.GaussianBlur(SIZE * .006))

    # ---- layer two: squiggles, tangles, a Weiss ring, lighter grey ---------
    mid = Image.new("L", (s, s), 0)
    d = ImageDraw.Draw(mid)

    def squiggle(cx, cy, length, amp, ang0, width, fill):
        pts = []
        for k in range(26):
            t = k / 25
            along = (t - .5) * length
            off = math.sin(t * math.pi * 3.0 + ang0) * amp
            pts.append((cx + math.cos(ang0) * along - math.sin(ang0) * off,
                        cy + math.sin(ang0) * along + math.cos(ang0) * off))
        d.line(pts, fill=fill, width=width, joint="curve")

    for cx, cy, ln, ang in [(.30, .30, .20, .5), (.68, .26, .16, 2.4), (.58, .74, .18, 1.1)]:
        squiggle(cx * s, cy * s, ln * s, s * .014, ang, int(s * .0125), 232)

    def tangle(cx, cy, spread, n, fill):
        for _ in range(n):
            x, y = cx * s + rng.uniform(-spread, spread) * s, cy * s + rng.uniform(-spread, spread) * s
            pts, ang = [(x, y)], rng.uniform(0, math.tau)
            for _ in range(5):
                ang += rng.uniform(-1.5, 1.5)
                x += math.cos(ang) * s * .012
                y += math.sin(ang) * s * .012
                pts.append((x, y))
            d.line(pts, fill=fill, width=int(s * .0075), joint="curve")

    tangle(.24, .62, .038, 9, 238)
    tangle(.79, .30, .032, 7, 228)

    # Weiss ring — an incomplete, slightly oval annulus, not a drawn circle
    rcx, rcy, rr = .46 * s, .44 * s, .052 * s
    d.arc([rcx - rr, rcy - rr * .86, rcx + rr, rcy + rr * .86], 25, 335,
          fill=240, width=int(s * .0125))

    mid = mid.resize((SIZE, SIZE), Image.LANCZOS).filter(ImageFilter.GaussianBlur(SIZE * .0035))

    out = veil(im, dark, (22, 22, 26))
    return veil(out, mid, (46, 46, 52))


def f_flashes(im):
    """Photopsia: an arc of light off to the side, not a central glare."""
    s = SIZE * 2
    layer = Image.new("L", (s, s), 0)
    d = ImageDraw.Draw(layer)
    cx = cy = s * .5
    R = s * .5
    for i, (frac, a0, a1) in enumerate([(.80, -42, 26), (.66, -18, 18), (.90, 8, 52)]):
        r = R * frac
        d.arc([cx-r, cy-r, cx+r, cy+r], a0, a1, fill=255 - i*30, width=int(s*.038))
    layer = layer.filter(ImageFilter.GaussianBlur(s*.016)).resize((SIZE, SIZE), Image.LANCZOS)
    return veil(im, layer.point(lambda v: min(255, int(v*1.5))), (255, 252, 240))


def f_zigzag(im):
    """Fortification spectrum — the shimmering zigzag arc of migraine aura.
    Distinct from photopsia: patterned and expanding, not a single flash."""
    s = SIZE * 2
    layer = Image.new("L", (s, s), 0)
    d = ImageDraw.Draw(layer)
    cx, cy, R = s*.50, s*.50, s*.30
    pts = []
    for k in range(34):
        t = -1.15 + k * (2.3 / 33)
        rr = R * (1.0 + (0.13 if k % 2 else -0.13))
        pts.append((cx + math.cos(t) * rr * 1.15, cy + math.sin(t) * rr))
    d.line(pts, fill=255, width=int(s*.019), joint="curve")
    layer = layer.filter(ImageFilter.GaussianBlur(s*.006)).resize((SIZE, SIZE), Image.LANCZOS)
    return veil(im, layer, (255, 250, 236))


def f_halo(im):
    """Halo around a light — corneal oedema from a pressure spike, the classic
    acute angle-closure symptom. Drawn as a target: a bright core, a soft glow,
    and one distinct ring, which is what patients describe and what a 22-degree
    sun halo looks like. Placed in the sky so the light source is unambiguous;
    a glow floating over buildings reads as a lens flare instead."""
    xs = np.linspace(0, 1, SIZE)
    X, Y = np.meshgrid(xs, xs)
    cx, cy = .44, .225
    r = np.sqrt((X - cx) ** 2 + ((Y - cy) * 1.0) ** 2)

    core = np.exp(-(r / .042) ** 2)                     # the light itself
    bloom = np.exp(-(r / .115) ** 1.6) * .55            # glare around it
    ring = np.exp(-((r - .185) / .020) ** 2) * .95      # the halo
    inner = np.clip(1 - r / .185, 0, 1) ** 2 * .13      # faint haze inside the ring

    m = np.clip(core + bloom + ring + inner, 0, 1)
    mask = Image.fromarray((m * 255).astype(np.uint8), "L")
    # a hint of colour separation in the ring, as in a real halo
    warm = Image.fromarray((np.clip(np.exp(-((r - .199) / .017) ** 2) * .5, 0, 1) * 255)
                           .astype(np.uint8), "L")
    out = veil(im, mask, (255, 253, 246))
    return veil(out, warm, (255, 214, 150))


def f_patch(im):
    """A discrete scotoma: one area absent, everything around it intact."""
    return lost(im, grad(lambda X, Y: 1 - np.clip(
        (np.sqrt(((X-.715)/.098)**2 + ((Y-.545)/.092)**2) - .74) / .40, 0, 1)))


def f_tunnel(im):
    return lost(im, grad(lambda X, Y: np.clip(
        (np.sqrt((X-.5)**2 + (Y-.5)**2) - .16) / .13, 0, 1)))


def f_half(im):
    return lost(im, grad(lambda X, Y: np.clip((X - .50) / .085, 0, 1)))


def f_quadrant(im):
    return lost(im, grad(lambda X, Y: np.clip((X-.50)/.085, 0, 1) * np.clip((.50-Y)/.085, 0, 1)))


TILES = [
    ("normal", f_normal), ("blur", f_blur), ("distort", f_distort), ("faded", f_faded),
    ("central", f_central), ("curtain", f_curtain), ("floaters", f_floaters),
    ("flashes", f_flashes), ("zigzag", f_zigzag), ("halo", f_halo), ("patch", f_patch),
    ("tunnel", f_tunnel), ("half", f_half), ("quadrant", f_quadrant),
]


# ------------------------------------------------------------- diplopia ------
def diplopia(base, mode):
    """Both images are genuinely perceived, so the ghost is blended rather than
    faded to a hint. Separation is generous: at thumbnail size a subtle offset
    reads as camera shake, not as two objects."""
    if mode is None:
        return base
    # Split the offset either side of centre rather than pasting one copy to the
    # right of the other. Offsetting in one direction leaves the gap between the
    # two images sitting half a shift off centre, and the crop cannot be nudged
    # back — it is already flush against the edge of the source frame.
    # Horizontal only: the vertical tile keeps the one-sided offset.
    if mode == "h":
        h = int(SIZE * SEP_H) // 2
        left = base.copy();  left.paste(base, (-h, 0))
        right = base.copy(); right.paste(base, (h, 0))
        return Image.blend(left, right, 0.5)

    dy = int(SIZE * SEP_V)
    # Seed the ghost with the base rather than empty canvas: filling with
    # background left an uncovered strip along one edge which then blended to a
    # dark band — the "shadow" down the side.
    ghost = base.copy()
    ghost.paste(base, (0, dy))
    return Image.blend(base, ghost, 0.5)


def main():
    scene = sys.argv[1] if len(sys.argv) > 1 else os.path.join(ROOT, "_src", "scene.jpg")
    dip = sys.argv[2] if len(sys.argv) > 2 else os.path.join(ROOT, "_src", "dip.jpg")
    os.makedirs(OUT, exist_ok=True)
    mask = circle_mask(SIZE)
    total = 0

    def emit(name, img):
        nonlocal total
        canvas = Image.new("RGB", (SIZE, SIZE), BG)
        canvas.paste(img, (0, 0), mask)
        path = os.path.join(OUT, "sym-%s.jpg" % name)
        canvas.save(path, "JPEG", quality=76, optimize=True, progressive=True)
        kb = os.path.getsize(path) / 1024
        total += kb
        print("  sym-%-14s %5.0f KB" % (name + ".jpg", kb))

    base = load_square(scene, cx=.50, cy=.625, frac=1.0)   # bottom-weighted: keeps sky for the halo
    for name, fn in TILES:
        emit(name, fn(base.copy()))

    if os.path.exists(dip):
        # A hard vertical against a bright, near-empty sky, plus one discrete
        # bright disc. Both double unambiguously: two towers, two suns. Earlier
        # sources failed here — a tree crown is repeating texture, so a shifted
        # copy overlaps like with like and reads as one blurry tree.
        #
        # Framing is measured, not guessed. In the source the tower stands at
        # x .546 and spans y .263 to .735 — 1232 px of a 2643 px frame — so any
        # crop under about 1250 px cannot contain it and clips the spire. The
        # side is capped at 2 x (1500 - 819) = 1362 px, the widest square that
        # still lets the tower sit horizontally centred; wider and it gets
        # pushed back off centre by the edge of the frame. cy .476 keeps the whole tower
        # in shot with the sun just below the centre line, trading a little of the
        # water for headroom above the spire. The crop can only shift, not
        # shrink: at frac .908 there is barely 130 px of margin around the
        # tower, so a tighter square starts cutting the spire again.
        DCX, DCY, DFR = .546, .476, .908
        dbase = load_square(dip, cx=DCX, cy=DCY, frac=DFR)
        for name, mode in [("dip-single", None), ("dip-h", "h"), ("dip-v", "v")]:
            emit(name, diplopia(dbase.copy(), mode))
    else:
        print("  (no diplopia source at %s — skipped)" % dip)

    print("\n%d tiles, %.0f KB total" % (len(TILES) + (3 if os.path.exists(dip) else 0), total))


if __name__ == "__main__":
    main()
