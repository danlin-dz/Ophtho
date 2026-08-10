#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Palette audit: WCAG contrast plus colour-vision-deficiency simulation.

    python3 tools/check-colours.py

Two separate questions, both of which matter:

  1. Contrast — is the text legible at all? CVD barely changes perceived
     lightness, so anything passing contrast passes for colour-blind users too.
     This is the check that does most of the work.
  2. Hue separation — are two colours that MEAN different things still
     distinguishable once red/green channels collapse? Only relevant where
     colour alone carries information, which the card avoids by design.

Simulation uses the Brettel/Viénot linear-RGB method, the standard approach.
"""
import sys

PALETTE = {
    "pupil":      "#150F0C",
    "pupil-deep": "#0D0908",
    "choroid":    "#241A15",
    "choroid-hi": "#2E211A",
    "reflex":     "#FF8A4C",
    "disc":       "#F7EBDB",
    "vessel":     "#D9483C",
    "banner-bg":  "#2E1210",
    "taupe":      "#A08A7B",
    "taupe-dim":  "#978171",
}

# foreground, background, label, minimum ratio (WCAG AA)
PAIRS = [
    ("disc",      "pupil",      "body text on page",              4.5),
    ("disc",      "choroid",    "phrase text on a card",          4.5),
    ("disc",      "pupil-deep", "fullscreen phrase (large)",      3.0),
    ("taupe",     "pupil",      "scope / footer prose",           4.5),
    ("taupe",     "choroid",    "phonetic line on a card",        4.5),
    ("taupe-dim", "pupil",      "small mono labels",              4.5),
    ("taupe-dim", "choroid",    "English label on a card",        4.5),
    ("reflex",    "pupil",      "accent text, stage numbers",     4.5),
    ("reflex",    "choroid",    "accent on a card",               4.5),
    ("pupil-deep","reflex",     "text on orange button",          4.5),
    ("disc",      "banner-bg",  "draft banner text",              4.5),
]

CVD = {
    "protanopia":   ((0.0, 2.02344, -2.52581), (0.0, 1.0, 0.0), (0.0, 0.0, 1.0)),
    "deuteranopia": ((1.0, 0.0, 0.0), (0.494207, 0.0, 1.24827), (0.0, 0.0, 1.0)),
    "tritanopia":   ((1.0, 0.0, 0.0), (0.0, 1.0, 0.0), (-0.395913, 0.801109, 0.0)),
}


def hex2rgb(h):
    h = h.lstrip("#")
    return tuple(int(h[i:i+2], 16) / 255 for i in (0, 2, 4))


def lin(c):
    return c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4


def lum(rgb):
    r, g, b = (lin(c) for c in rgb)
    return 0.2126 * r + 0.7152 * g + 0.0722 * b


def ratio(a, b):
    la, lb = lum(hex2rgb(a)), lum(hex2rgb(b))
    hi, lo = max(la, lb), min(la, lb)
    return (hi + 0.05) / (lo + 0.05)


def to_lms(rgb):
    r, g, b = (lin(c) for c in rgb)
    return (17.8824*r + 43.5161*g + 4.11935*b,
            3.45565*r + 27.1554*g + 3.86714*b,
            0.0299566*r + 0.184309*g + 1.46709*b)


def from_lms(l, m, s):
    r = 0.0809444479*l - 0.130504409*m + 0.116721066*s
    g = -0.0102485335*l + 0.0540193266*m - 0.113614708*s
    b = -0.000365296938*l - 0.00412161469*m + 0.693511405*s
    out = []
    for c in (r, g, b):
        c = max(0.0, min(1.0, c))
        c = 12.92 * c if c <= 0.0031308 else 1.055 * (c ** (1/2.4)) - 0.055
        out.append(max(0.0, min(1.0, c)))
    return tuple(out)


def simulate(hexcol, kind):
    l, m, s = to_lms(hex2rgb(hexcol))
    (a, b, c), (d, e, f), (g, h, i) = CVD[kind]
    l2 = a*l + b*m + c*s
    m2 = d*l + e*m + f*s
    s2 = g*l + h*m + i*s
    r, gg, bb = from_lms(l2, m2, s2)
    return "#%02X%02X%02X" % (round(r*255), round(gg*255), round(bb*255))


fails = []
print("CONTRAST, NORMAL VISION AND SIMULATED CVD\n")
print("  %-34s %6s %6s %6s %6s  %s" % ("pair", "normal", "protan", "deutan", "tritan", "needs"))
for fg, bg, label, need in PAIRS:
    rs = [ratio(PALETTE[fg], PALETTE[bg])]
    for k in ("protanopia", "deuteranopia", "tritanopia"):
        rs.append(ratio(simulate(PALETTE[fg], k), simulate(PALETTE[bg], k)))
    worst = min(rs)
    if worst < need:
        fails.append("%s: worst %.2f, needs %.1f  (%s on %s)" % (label, worst, need, fg, bg))
    print("  %-34s %6.2f %6.2f %6.2f %6.2f  %-5.1f %s" % (
        label, rs[0], rs[1], rs[2], rs[3], need, "ok" if worst >= need else "FAIL"))

print("\n\nUNDER COLOUR-VISION DEFICIENCY")
print("  Lightness is nearly unchanged by CVD, so the ratios above hold. What")
print("  changes is hue. Simulated appearance of the two accent colours:\n")
print("  %-12s %-11s %-11s %-11s %-11s" % ("colour", "normal", "protan", "deutan", "tritan"))
for name in ("reflex", "vessel", "disc", "taupe"):
    row = [simulate(PALETTE[name], k) for k in ("protanopia", "deuteranopia", "tritanopia")]
    print("  %-12s %-11s %-11s %-11s %-11s" % (name, PALETTE[name], *row))

print("\n  reflex vs vessel separation (the only two hues that carry meaning):")
for k in CVD:
    a, b = simulate(PALETTE["reflex"], k), simulate(PALETTE["vessel"], k)
    print("    %-14s %s vs %s   lightness ratio %.2f"
          % (k, a, b, ratio(a, b)))

print("\n" + ("FAILURES:\n  " + "\n  ".join(fails) if fails else "ALL PAIRS PASS WCAG AA"))
sys.exit(1 if fails else 0)
