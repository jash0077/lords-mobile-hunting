import os

os.makedirs("/home/ubuntu/lords-mobile-hunting/assets/gear", exist_ok=True)

gear_svgs = {
    "helmet": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
        <rect width="100" height="100" rx="20" fill="#1e1b4b"/>
        <path d="M50 20 C30 20 25 45 25 60 C25 75 35 85 50 85 C65 85 75 75 75 60 C75 45 70 20 50 20 Z" fill="#3b82f6" stroke="#a855f7" stroke-width="4"/>
        <path d="M40 50 L60 50 L60 70 L40 70 Z" fill="#0f172a"/>
        <text x="50" y="93" font-size="10" fill="#f1f5f9" text-anchor="middle" font-weight="bold">HELMET</text>
    </svg>''',
    "armor": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
        <rect width="100" height="100" rx="20" fill="#1e1b4b"/>
        <path d="M30 25 L50 15 L70 25 L75 75 C75 80 70 85 65 85 L35 85 C30 85 25 80 25 75 Z" fill="#ec4899" stroke="#3b82f6" stroke-width="4"/>
        <path d="M50 25 L50 75" stroke="#ffffff" stroke-width="3"/>
        <text x="50" y="93" font-size="10" fill="#f1f5f9" text-anchor="middle" font-weight="bold">ARMOR</text>
    </svg>''',
    "legs": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
        <rect width="100" height="100" rx="20" fill="#1e1b4b"/>
        <path d="M30 20 L70 20 L65 80 L55 80 L50 45 L45 80 L35 80 Z" fill="#22c55e" stroke="#06b6d4" stroke-width="4"/>
        <text x="50" y="93" font-size="10" fill="#f1f5f9" text-anchor="middle" font-weight="bold">LEGS</text>
    </svg>''',
    "main_hand": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
        <rect width="100" height="100" rx="20" fill="#1e1b4b"/>
        <path d="M20 80 L75 25 L80 30 L25 85 Z" fill="#f5a623" stroke="#ef4444" stroke-width="4"/>
        <rect x="15" y="75" width="15" height="15" rx="3" fill="#a855f7"/>
        <text x="50" y="93" font-size="9" fill="#f1f5f9" text-anchor="middle" font-weight="bold">MAIN-HAND</text>
    </svg>''',
    "off_hand": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
        <rect width="100" height="100" rx="20" fill="#1e1b4b"/>
        <path d="M50 15 C30 20 25 40 25 60 C25 75 40 85 50 88 C60 85 75 75 75 60 C75 40 70 20 50 15 Z" fill="#06b6d4" stroke="#3b82f6" stroke-width="4"/>
        <circle cx="50" cy="50" r="15" fill="#1e1b4b" stroke="#ffffff" stroke-width="2"/>
        <text x="50" y="93" font-size="9" fill="#f1f5f9" text-anchor="middle" font-weight="bold">OFF-HAND</text>
    </svg>''',
    "accessory": '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
        <rect width="100" height="100" rx="20" fill="#1e1b4b"/>
        <circle cx="50" cy="50" r="25" fill="none" stroke="#f5a623" stroke-width="8"/>
        <circle cx="50" cy="50" r="10" fill="#ec4899"/>
        <text x="50" y="93" font-size="9" fill="#f1f5f9" text-anchor="middle" font-weight="bold">ACCESSORY</text>
    </svg>'''
}

for cat, svg_content in gear_svgs.items():
    path = f"/home/ubuntu/lords-mobile-hunting/assets/gear/{cat}.svg"
    with open(path, "w") as f:
        f.write(svg_content)
    print(f"Generated {path}")

print("All local gear category SVGs generated successfully!")
