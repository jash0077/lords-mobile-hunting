import urllib.request
import json

url = "https://jsonblob.com/api/json"
data = [
    {"id": "ev_dragon_arena", "title": "DRAGON ARENA🐲", "dateStr": "2026-08-08", "timeStr": "20:30", "zoneId": "kolkata"},
    {"id": "ev_kvk", "title": "KvK Battle", "dateStr": "2026-08-15", "timeStr": "12:00", "zoneId": "kolkata"}
]

req = urllib.request.Request(
    url,
    data=json.dumps(data).encode("utf-8"),
    headers={"Content-Type": "application/json", "Accept": "application/json"},
    method="POST"
)

try:
    with urllib.request.urlopen(req) as resp:
        print("Status:", resp.status)
        print("Headers:", dict(resp.headers))
        blob_url = resp.headers.get("Location")
        print("Blob URL:", blob_url)
        body = resp.read().decode("utf-8")
        print("Body:", body)
except Exception as e:
    print("Error:", e)
