import requests
res = requests.get('https://kaelxzenya2007.github.io/Prototype1/')
print(res.text[:10000])
with open('proto_source.html', 'w') as f:
    f.write(res.text)
