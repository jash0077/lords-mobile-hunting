import os
from PIL import Image, ImageDraw, ImageFont

os.makedirs('/home/ubuntu/lords-mobile-hunting/assets/gear', exist_ok=True)

categories = ['legs', 'armor', 'helmet', 'main_hand', 'off_hand', 'accessory']
colors = {
    'legs': (34, 197, 94),     # green
    'armor': (236, 72, 153),   # pink
    'helmet': (59, 130, 246),  # blue
    'main_hand': (245, 158, 11), # gold
    'off_hand': (6, 182, 212), # cyan
    'accessory': (168, 85, 247) # purple
}

# Generate generic category icons and specific item icons
for cat in colors:
    img = Image.new('RGBA', (128, 128), (15, 23, 42, 255))
    d = ImageDraw.Draw(img)
    # Draw border
    d.rectangle([4, 4, 123, 123], outline=colors[cat], width=6)
    # Draw inner fill
    d.rectangle([12, 12, 115, 115], fill=(30, 41, 59, 255))
    # Draw text label
    d.text((20, 50), cat.upper()[:6], fill=(255, 255, 255, 255))
    img.save(f"/home/ubuntu/lords-mobile-hunting/assets/gear/{cat}.png")

print("Generated default category PNG icons successfully.")
