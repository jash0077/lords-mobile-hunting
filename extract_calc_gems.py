with open('proto_source.html') as f:
    text = f.read()

pos = text.find('function calculateGems')
if pos != -1:
    print(text[pos:pos+2000])
else:
    print("Not found")
