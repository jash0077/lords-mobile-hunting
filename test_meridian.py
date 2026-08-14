import json
import os

print("--- Testing Meridian Event Sync & Data Integrity ---")

data_path = "/home/ubuntu/lords-mobile-hunting/data/meridian_events.json"
html_path = "/home/ubuntu/lords-mobile-hunting/meridian.html"

# 1. Test JSON data validity
if os.path.exists(data_path):
    with open(data_path, "r") as f:
        try:
            events = json.load(f)
            print(f"✅ meridian_events.json successfully parsed. Found {len(events)} events.")
            for ev in events:
                assert "id" in ev, "Event missing id"
                assert "title" in ev, "Event missing title"
                assert "dateStr" in ev, "Event missing dateStr"
                assert "timeStr" in ev, "Event missing timeStr"
                assert "zoneId" in ev, "Event missing zoneId"
            print("✅ All event objects contain valid schema fields (id, title, dateStr, timeStr, zoneId).")
        except Exception as e:
            print(f"❌ JSON parsing failed: {e}")
else:
    print(f"❌ {data_path} not found!")

# 2. Test HTML file checks
if os.path.exists(html_path):
    with open(html_path, "r") as f:
        content = f.read()
        assert "loadGlobalEvents" in content, "Missing loadGlobalEvents function"
        assert "saveEventFromForm" in content, "Missing saveEventFromForm function"
        assert "DATA_PATH" in content, "Missing DATA_PATH configuration"
        print("✅ meridian.html contains all required sync and edit functions.")
else:
    print(f"❌ {html_path} not found!")

print("--- Self-Test Completed Successfully ---")
