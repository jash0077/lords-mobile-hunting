import os
import requests

os.makedirs('/home/ubuntu/lords-mobile-hunting/assets/gear', exist_ok=True)

gear_items = [
    ("l1", "https://static.wikia.nocookie.net/lordsmobile/images/2/22/Frostwing_Greaves.png"),
    ("l2", "https://static.wikia.nocookie.net/lordsmobile/images/9/91/Tasset_of_the_Deep.png"),
    ("l3", "https://static.wikia.nocookie.net/lordsmobile/images/e/e4/Grips_of_the_Dead.png"),
    ("a1", "https://static.wikia.nocookie.net/lordsmobile/images/5/50/Brutal_Plate.png"),
    ("a2", "https://static.wikia.nocookie.net/lordsmobile/images/3/36/Tesla_Coils.png"),
    ("a3", "https://static.wikia.nocookie.net/lordsmobile/images/7/77/Burning_Scroll.png"),
    ("h1", "https://static.wikia.nocookie.net/lordsmobile/images/4/4b/Corinthian_Helmet.png"),
    ("h2", "https://static.wikia.nocookie.net/lordsmobile/images/e/e1/Terror_Shield_Mask.png"),
    ("h3", "https://static.wikia.nocookie.net/lordsmobile/images/6/62/Bumblebee_Helm.png"),
    ("h4", "https://static.wikia.nocookie.net/lordsmobile/images/b/b8/Noceros_Mask.png"),
    ("m1", "https://static.wikia.nocookie.net/lordsmobile/images/d/d4/Fire_Wall_Greatsword.png"),
    ("m2", "https://static.wikia.nocookie.net/lordsmobile/images/3/33/Atrocious_Mace.png"),
    ("m3", "https://static.wikia.nocookie.net/lordsmobile/images/1/1f/Saberfang_Scimitar.png"),
    ("m4", "https://static.wikia.nocookie.net/lordsmobile/images/6/6c/Lunar_Scourge.png"),
    ("o1", "https://static.wikia.nocookie.net/lordsmobile/images/e/ef/Rumbling_Shield.png"),
    ("o2", "https://static.wikia.nocookie.net/lordsmobile/images/3/37/Terror_Shield.png"),
    ("o3", "https://static.wikia.nocookie.net/lordsmobile/images/8/8c/Book_of_the_Dead.png"),
    ("o4", "https://static.wikia.nocookie.net/lordsmobile/images/8/85/Frostwing_Shield.png"),
    ("ac1", "https://static.wikia.nocookie.net/lordsmobile/images/7/79/Blight_Ring.png"),
    ("ac2", "https://static.wikia.nocookie.net/lordsmobile/images/9/90/Champions_Brooch.png"),
    ("ac3", "https://static.wikia.nocookie.net/lordsmobile/images/c/c5/Lunar_Orb.png")
]

headers = {'User-Agent': 'Mozilla/5.0'}

for item_id, url in gear_items:
    try:
        res = requests.get(url, headers=headers, timeout=10)
        if res.status_code == 200:
            # strip revision parameters from wiki url if any
            clean_url = url.split('/revision')[0]
            filename = clean_url.split('/')[-1]
            filepath = f"/home/ubuntu/lords-mobile-hunting/assets/gear/{item_id}_{filename}"
            with open(filepath, 'wb') as f:
                f.write(res.content)
            print(f"Downloaded {item_id} -> {filename}")
        else:
            print(f"Failed {item_id}: status {res.status_code}")
    except Exception as e:
            print(f"Error {item_id}: {e}")
