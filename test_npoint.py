import urllib.request
import json

# Let's test creating a bin on npoint.io or similar
url = "https://api.npoint.io"
data = {"events": [{"id": "test"}]}
req = urllib.request.Request(
    url,
    data=json.dumps(data).encode("utf-8"),
    headers={"Content-Type": "application/json"},
    method="POST"
)
try:
    with urllib.request.urlopen(req) as resp:
        print("Status:", resp.status)
        print("Response:", resp.read().decode())
except Exception as e:
    print("Error:", e)
