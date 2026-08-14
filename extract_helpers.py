with open('proto_source.html') as f:
    text = f.read()

pos = text.find('function parseInput')
if pos != -1:
    print(text[pos:pos+1500])
else:
    print("Not found")
