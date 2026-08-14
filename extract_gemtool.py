with open('proto_source.html') as f:
    text = f.read()

pos = text.find('id="gemTool"')
if pos != -1:
    print(text[pos:pos+3500])
else:
    print("Not found")
