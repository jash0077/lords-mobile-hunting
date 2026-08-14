import urllib.request
import json

# Let's test a reliable free public JSON endpoint or GitHub raw file update via a public worker or static file
print("Testing static file hosting on GitHub Pages...")
# When meridian_events.json is updated and pushed to GitHub via our app or if we use a public CORS proxy / git backend, wait:
# Can we use GitHub Pages raw url with a free public CORS proxy or jsDelivr?
# jsDelivr caches files for up to 12 hours, which is too slow for real-time event updates.
# What about a free public JSON endpoint like https://api.jsonbin.io/v3/b (requires free master key) or github raw?
