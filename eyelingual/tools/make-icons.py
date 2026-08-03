#!/usr/bin/env python3
"""
Generates the PWA icon set.

Mark: a dilated pupil seen on retinoscopy — the orange red reflex — crossed by
the narrow vertical band of a slit-lamp beam. Sibling language cards should keep
the same mark and change ACCENT only, so the set reads as one family on a home
screen.

    python3 tools/make-icons.py
"""
from PIL import Image, ImageDraw
import os

BG      = (21, 15, 12)        # --pupil
ACCENT  = (255, 138, 76)      # --reflex   (Mandarin)
ACCENT2 = (217, 72, 60)       # --vessel
BEAM    = (247, 235, 219)     # --disc

OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "icons")
SS = 8  # supersample factor


def radial(size, inner, outer, r):
    """Soft radial fill: red reflex is hotter at the centre."""
    img = Image.new("RGB", (size, size), outer)
    d = ImageDraw.Draw(img)
    steps = 64
    for i in range(steps, 0, -1):
        t = i / steps
        rr = r * t
        col = tuple(round(outer[c] + (inner[c] - outer[c]) * (1 - t) ** 1.6) for c in range(3))
        d.ellipse([size / 2 - rr, size / 2 - rr, size / 2 + rr, size / 2 + rr], fill=col)
    return img


def build(px, pad_ratio, rounded):
    S = px * SS
    canvas = Image.new("RGBA", (S, S), BG + (255,))

    disc_r = S * (0.5 - pad_ratio)

    # red reflex disc
    glow = radial(S, (255, 196, 150), ACCENT2, disc_r)
    mask = Image.new("L", (S, S), 0)
    ImageDraw.Draw(mask).ellipse(
        [S / 2 - disc_r, S / 2 - disc_r, S / 2 + disc_r, S / 2 + disc_r], fill=255
    )
    canvas.paste(glow, (0, 0), mask)

    # limbal edge
    ring = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    ImageDraw.Draw(ring).ellipse(
        [S / 2 - disc_r, S / 2 - disc_r, S / 2 + disc_r, S / 2 + disc_r],
        outline=ACCENT + (255,), width=max(2, int(S * 0.012)),
    )
    canvas.alpha_composite(ring)

    # slit-lamp beam: narrow vertical band, clipped to the disc
    beam = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    bw = disc_r * 0.17
    ImageDraw.Draw(beam).rectangle(
        [S / 2 - bw / 2, S / 2 - disc_r, S / 2 + bw / 2, S / 2 + disc_r],
        fill=BEAM + (242,),
    )
    beam.putalpha(Image.composite(beam.getchannel("A"), Image.new("L", (S, S), 0), mask))
    canvas.alpha_composite(beam)

    if rounded:
        rr = Image.new("L", (S, S), 0)
        ImageDraw.Draw(rr).rounded_rectangle([0, 0, S - 1, S - 1], radius=int(S * 0.225), fill=255)
        canvas.putalpha(rr)

    return canvas.resize((px, px), Image.LANCZOS)


os.makedirs(OUT, exist_ok=True)
jobs = [
    ("icon-192.png",           192, 0.20, True),
    ("icon-512.png",           512, 0.20, True),
    # maskable: mark sits inside the centre 80% safe zone so Android can crop it
    ("icon-maskable-512.png",  512, 0.30, False),
    ("apple-touch-icon.png",   180, 0.20, False),
    ("favicon.png",             64, 0.16, True),
]
for name, px, pad, rounded in jobs:
    img = build(px, pad, rounded)
    if name == "apple-touch-icon.png":          # iOS masks corners itself
        img = img.convert("RGB")
    img.save(os.path.join(OUT, name))
    print(f"  {name:26} {px}px")

print(f"\nWrote {len(jobs)} icons to {OUT}")
