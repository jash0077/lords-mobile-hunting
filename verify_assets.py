import json
import os
import re

gear_data_path = "/home/ubuntu/lords-mobile-hunting/gear-data.js"
assets_dir = "/home/ubuntu/lords-mobile-hunting/assets/gear"

with open(gear_data_path, "r") as f:
    content = f.read()

# Extract image paths like 'assets/gear/xxx.svg'
img_paths = re.findall(r'assets/gear/[a-zA-Z0-9_\-\.]+\.svg', content)
print(f"Total equipment image references found in gear-data.js: {len(img_paths)}")

missing = []
for path in set(img_paths):
    full_path = os.path.join("/home/ubuntu/lords-mobile-hunting", path)
    if not os.path.exists(full_path):
        missing.append(path)

print(f"Missing asset files: {len(missing)}")
if missing:
    print(f"Missing: {missing}")
else:
    print("All equipment image assets exist locally and match gear-data.js perfectly!")
