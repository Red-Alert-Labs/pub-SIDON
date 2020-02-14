from flask import Flask, jsonify, request
import pandas as pd
from model_prediction import CustomModelPrediction
from preprocess import TextPreprocessor


app = Flask(__name__)


def calculateScore(good, bad):
    goodval = int(good * 100)
    notbadval = 100 - int(bad * 100)
    score = (goodval + notbadval) / 2
    if score > 100:
        return 100
    return int(score)


@app.route("/pred", methods=['POST'])
def predict():

    values = request.json['data']
    cwe  = request.json['cwe']

    print(values)
    if cwe != 457:
        prediction = {
            "good" : str(0),
            "bad" : str(0),
            "score" : -1
        }
        return jsonify(prediction)

    classifier = CustomModelPrediction.from_path('.')
    results = classifier.predict(values)

    predictions = []

    for r in results:
        prediction = {
            "good" : str(r[0]),
            "bad" : str(r[1]),
            "score" : calculateScore(r[0], r[1])
        }

        predictions.append(prediction)

    return jsonify(predictions[0])


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5002)
