import requests, json

http_header = {'Content-Type': 'application/json'}

def cleanData(data):
    cleaned = ""
    for c in data:
        if c == '\t':
            cleaned += ' '
        else:
            cleaned += str(c)
    return cleaned

def getDataAsJson(f):
    lines = f.readlines()
    data = ""
    for line in lines:
        data += cleanData(line)
        data += '\n'
    payload = {
        "data" : [data]
    }
    return json.dumps(payload)

#Communicates with the ML prediction server
def getPrediction(file):
    data = getDataAsJson(file)
    response = requests.post('http://127.0.0.1:5000/pred', data=data,headers=http_header)
    print(response)
    if response.status_code == 200:
        return json.loads(response.data)
    else:
        return None
