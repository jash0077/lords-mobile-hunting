with open('proto_source.html') as f:
    text = f.read()

pos = text.find('resultTab')
if pos != -1:
    print(text[pos-200:pos+800])
else:
    print("Not found")
