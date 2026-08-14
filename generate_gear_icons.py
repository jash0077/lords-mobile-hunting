import os
import re

os.makedirs("/home/ubuntu/lords-mobile-hunting/assets/gear", exist_ok=True)

gear_data_path = "/home/ubuntu/lords-mobile-hunting/gear-data.js"
with open(gear_data_path, "r") as f:
    content = f.read()

pattern = re.compile(r'name:\s*"([^"]+)",\s*rarity:\s*"([^"]+)",\s*image:\s*"([^"]+)"')
matches = pattern.findall(content)

print(f"Generating local SVG icons for {len(matches)} gear items...")

new_content = content
for name, rarity, img_url in matches:
    filename = re.sub(r'[^a-zA-Z0-9]', '_', name).lower() + ".png"
    local_path = f"assets/gear/{filename}"
    
    # We can create a high-quality SVG representing the item
    # Let's shorten name for display on icon badge
    display_name = name.split()[0] if len(name.split()) > 0 else name
    
    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="mythicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ff8800" />
      <stop offset="100%" stop-color="#ffcc00" />
    </linearGradient>
    <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#1e293b" />
      <stop offset="100%" stop-color="#0f172a" />
    </radialGradient>
  </defs>
  <rect width="100" height="100" rx="16" fill="url(#bgGrad)" stroke="url(#mythicGrad)" stroke-width="3"/>
  <circle cx="50" cy="42" r="28" fill="#334155" stroke="#ffaa00" stroke-width="1.5" opacity="0.8"/>
  <text x="50" y="47" font-family="Arial, sans-serif" font-weight="bold" font-size="28" fill="#ffaa00" text-anchor="middle">⚔️</text>
  <text x="50" y="84" font-family="Arial, sans-serif" font-weight="bold" font-size="11" fill="#ffffff" text-anchor="middle">{display_name}</text>
</svg>'''
    
    # Save as svg or png (since browsers render svg data URIs or svg files perfectly)
    # Let's save as .svg and update path to .svg
    svg_filename = re.sub(r'[^a-zA-Z0-9]', '_', name).lower() + ".svg"
    svg_local_path = f"assets/gear/{svg_filename}"
    full_svg_path = f"/home/ubuntu/lords-mobile-hunting/{svg_local_path}"
    
    with open(full_svg_path, "w") as sf:
        sf.write(svg_content)
        
    new_content = new_content.replace(img_url, svg_local_path)

with open(gear_data_path, "w") as f:
    f.write(new_content)

print("gear-data.js updated with local SVG icon paths successfully!")
