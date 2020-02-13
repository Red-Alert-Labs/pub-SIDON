from flask import Flask, jsonify, request
import pandas as pd
from model_prediction import CustomModelPrediction
from preprocess import TextPreprocessor


app = Flask(__name__)


def calculateScore(good, bad):
    return 50

@app.route("/pred", methods=['POST'])
def predict():

    values = request.json['data']

    classifier = CustomModelPrediction.from_path('.')
    results = classifier.predict(values)

    predictions = []

    for r in results:
        prediction = {}
        prediction["good"] = str(r[0])
        prediction["bad"] = str(r[1])
        prediction["score"] = calculateScore(r[0], r[1])
        predictions.append(prediction)

    return jsonify(predictions)


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5002)
