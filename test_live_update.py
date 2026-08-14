import json

path = "/home/ubuntu/lords-mobile-hunting/data/meridian_events.json"
with open(path, "r") as f:
    data = json.load(f)

print("--- Live Update Simulation ---")
print(f"Event ID: {data[0]['id']}")
print(f"Updated Title: {data[0]['title']}")
print(f"Updated Date: {data[0]['dateStr']}")
print(f"Updated Time: {data[0]['timeStr']}")
assert data[0]['dateStr'] == "2026-08-20"
assert data[0]['timeStr'] == "21:45"
print("✅ Live date and time update successfully verified in JSON storage!")
