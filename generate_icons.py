from PIL import Image, ImageDraw, ImageFont
import os

def create_icon(size, filename):
    # Create a square image with a background color
    img = Image.new('RGB', (size, size), color=(44, 62, 80))  # Dark blue-ish color
    draw = ImageDraw.Draw(img)
    
    # Draw a simple "LM" (Lords Mobile) text or a circle
    margin = size // 10
    draw.ellipse([margin, margin, size - margin, size - margin], fill=(52, 152, 219), outline=(236, 240, 241), width=size//20)
    
    # Try to add text if possible, otherwise just the circle is fine
    try:
        # Using a default font
        font_size = size // 2
        # On Ubuntu, we can try to find a font
        font_paths = [
            "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
            "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf"
        ]
        font = None
        for path in font_paths:
            if os.path.exists(path):
                font = ImageFont.truetype(path, font_size)
                break
        
        if font:
            text = "LM"
            # Get text bounding box to center it
            bbox = draw.textbbox((0, 0), text, font=font)
            w, h = bbox[2] - bbox[0], bbox[3] - bbox[1]
            draw.text(((size - w) // 2, (size - h) // 2 - margin//2), text, fill=(255, 255, 255), font=font)
    except Exception as e:
        print(f"Could not add text: {e}")

    img.save(filename)
    print(f"Saved {filename}")

os.makedirs('/home/ubuntu/lords-mobile-hunting/icons', exist_ok=True)
create_icon(192, '/home/ubuntu/lords-mobile-hunting/icons/icon-192x192.png')
create_icon(512, '/home/ubuntu/lords-mobile-hunting/icons/icon-512x512.png')
create_icon(180, '/home/ubuntu/lords-mobile-hunting/icons/apple-touch-icon.png')
