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

def getData(file):
    data = ""
    with file.open('r') as f:
        lines = f.readlines()
        for line in lines:
            data += cleanData(line)
        f.close()
    return data

#Communicates with the ML prediction server
def getPrediction(data, cwe_id):

    cwe_id = int(cwe_id)
    rawPayload = {
        "data" : [data],
        "cwe"  : cwe_id
    }

    payload = json.dumps(rawPayload)
    #Hard Coded URL must be removed. Load from env
    response = requests.post('http://127.0.0.1:5002/pred', data=payload, headers=http_header)
    print(response)
    if response.status_code == 200:
        return response.json()
    else:
        return None
