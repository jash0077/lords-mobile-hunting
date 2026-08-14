import os
from PIL import Image, ImageDraw, ImageFont

os.makedirs('/home/ubuntu/lords-mobile-hunting/assets/gear/items', exist_ok=True)

# Define rarity colors (Legendary = Gold/Orange, Epic = Purple, Rare = Blue)
rarity_colors = {
    "Legendary": (245, 158, 11),
    "Epic": (168, 85, 247),
    "Rare": (59, 130, 246),
    "Mythic": (239, 68, 68)
}

categories = {
    "legs": ["l1", "l2", "l3", "l4", "l5", "l6", "l7", "l8", "l9", "l10", "l11", "l12"],
    "armor": ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10", "a11", "a12"],
    "helmet": ["h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8", "h9", "h10", "h11"],
    "main_hand": ["m1", "m2", "m3", "m4", "m5", "m6", "m7", "m8", "m9", "m10", "m11", "m12"],
    "off_hand": ["o1", "o2", "o3", "o4", "o5", "o6", "o7", "o8", "o9", "o10", "o11", "o12"],
    "accessory": ["ac1", "ac2", "ac3", "ac4", "ac5", "ac6", "ac7", "ac8", "ac9", "ac10", "ac11", "ac12", "ac13", "ac14", "ac15"]
}

for cat, ids in categories.items():
    for idx, item_id in enumerate(ids):
        img = Image.new('RGBA', (128, 128), (15, 23, 42, 255))
        d = ImageDraw.Draw(img)
        
        # Border
        d.rectangle([4, 4, 123, 123], outline=(200, 200, 200), width=5)
        # Inner background
        d.rectangle([12, 12, 115, 115], fill=(30, 41, 59, 255))
        
        # Draw category symbol or abbreviation
        d.text((22, 35), cat[:3].upper(), fill=(255, 255, 255, 255))
        d.text((22, 65), f"#{idx+1}", fill=(59, 130, 246, 255))
        
        img.save(f"/home/ubuntu/lords-mobile-hunting/assets/gear/items/{item_id}.png")

print("Generated all individual item icons successfully.")
