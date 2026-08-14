import os
import json
import urllib.request
import re

os.makedirs("/home/ubuntu/lords-mobile-hunting/assets/gear", exist_ok=True)

gear_data_path = "/home/ubuntu/lords-mobile-hunting/gear-data.js"
with open(gear_data_path, "r") as f:
    content = f.read()

# Extract items or we can parse/replace or define items in python
# Let's write a python script that parses gearData and downloads each image
# Actually, let's look at gear-data.js structure. It defines const gearData = { ... };
# We can extract all image URLs and names, download them, and replace their URLs with local paths like "assets/gear/filename.png".

import urllib.parse

# Let's write a robust parser & downloader in python
import re

items_found = []
# Find all occurrences of { name: "...", rarity: "...", image: "...", stats: {...} }
# Let's use a regex or parse the JS file by evaluating/extracting dict
# Simpler: regex search for name and image
pattern = re.compile(r'name:\s*"([^"]+)",\s*rarity:\s*"([^"]+)",\s*image:\s*"([^"]+)"')
matches = pattern.findall(content)

print(f"Found {len(matches)} gear items to download locally.")

new_content = content
for name, rarity, img_url in matches:
    filename = re.sub(r'[^a-zA-Z0-9]', '_', name).lower() + ".png"
    local_path = f"assets/gear/{filename}"
    full_local_path = f"/home/ubuntu/lords-mobile-hunting/{local_path}"
    
    try:
        req = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as resp, open(full_local_path, 'wb') as out:
            out.write(resp.read())
        print(f"Downloaded: {name} -> {local_path}")
        # Replace image URL in content with local path
        new_content = new_content.replace(img_url, local_path)
    except Exception as e:
        print(f"Failed to download {name} from {img_url}: {e}")

with open(gear_data_path, "w") as f:
    f.write(new_content)

print("gear-data.js updated with local asset paths successfully!")
