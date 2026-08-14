with open('proto_source.html') as f:
    text = f.read()

pos = text.find('revealAdv')
while pos != -1:
    print(text[pos-50:pos+300])
    print("="*40)
    pos = text.find('revealAdv', pos+1)
