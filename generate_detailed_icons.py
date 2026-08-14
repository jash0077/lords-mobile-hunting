import os
from PIL import Image, ImageDraw, ImageFont

os.makedirs('/home/ubuntu/lords-mobile-hunting/assets/gear/items', exist_ok=True)

# All items with their short codes / display names
all_items = {
    "legs": [("l1", "CB"), ("l2", "CG"), ("l3", "CS"), ("l4", "BP"), ("l5", "ST"), ("l6", "DT"), ("l7", "GB"), ("l8", "UB"), ("l9", "LD"), ("l10", "BW"), ("l11", "SR"), ("l12", "SS")],
    "armor": [("a1", "CP"), ("a2", "TS"), ("a3", "FP"), ("a4", "CM"), ("a5", "CC"), ("a6", "BB"), ("a7", "HC"), ("a8", "HCu"), ("a9", "FA"), ("a10", "WP"), ("a11", "DM"), ("a12", "PP")],
    "helmet": [("h1", "CH"), ("h2", "WC"), ("h3", "BH"), ("h4", "BuH"), ("h5", "CV"), ("h6", "CA"), ("h7", "SH"), ("h8", "AH"), ("h9", "FH"), ("h10", "SlH"), ("h11", "DH")],
    "main_hand": [("m1", "CBl"), ("m2", "CGS"), ("m3", "CBC"), ("m4", "FS"), ("m5", "SC"), ("m6", "GC"), ("m7", "EA"), ("m8", "TeS"), ("m9", "HK"), ("m10", "DS"), ("m11", "NO"), ("m12", "KA")],
    "off_hand": [("o1", "CK"), ("o2", "CL"), ("o3", "CLm"), ("o4", "WM"), ("o5", "EC"), ("o6", "LB"), ("o7", "EL"), ("o8", "SA"), ("o9", "VB"), ("o10", "DA"), ("o11", "DF"), ("o12", "VS")],
    "accessory": [("ac1", "CF"), ("ac2", "AC"), ("ac3", "CVl"), ("ac4", "CBl"), ("ac5", "RR"), ("ac6", "BD"), ("ac7", "PR"), ("ac8", "BR"), ("ac9", "FB"), ("ac10", "BSc"), ("ac11", "DI"), ("ac12", "WS"), ("ac13", "TV"), ("ac14", "FD"), ("ac15", "CAm")]
}

for cat, items in all_items.items():
    for item_id, code in items:
        img = Image.new('RGBA', (128, 128), (18, 24, 38, 255))
        d = ImageDraw.Draw(img)
        
        # Gold/Bronze frame resembling gear icon
        d.rectangle([4, 4, 123, 123], outline=(245, 158, 11), width=6)
        d.rectangle([10, 10, 117, 117], fill=(30, 41, 59, 255))
        
        # Inner emblem circle
        d.ellipse([30, 25, 98, 93], fill=(15, 23, 42, 255), outline=(59, 130, 246), width=3)
        
        # Text code
        d.text((42, 45), code, fill=(255, 255, 255, 255))
        
        img.save(f"/home/ubuntu/lords-mobile-hunting/assets/gear/items/{item_id}.png")

print("Generated all detailed item icons successfully.")
