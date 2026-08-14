with open('proto_source.html') as f:
    text = f.read()

import re
pos = text.find('Gem Prediction')
if pos != -1:
    print(text[pos-500:pos+2500])
else:
    print("Not found")
