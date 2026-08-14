with open('proto_source.html') as f:
    text = f.read()

for name in ['revealAdv', 'showResult', 'toggleGuide']:
    pos = text.find(name)
    if pos != -1:
        print(f"--- {name} ---")
        print(text[pos:pos+500])
