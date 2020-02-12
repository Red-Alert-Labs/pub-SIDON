from flask import Flask, jsonify, request
import pandas as pd
from model_prediction import CustomModelPrediction
from preprocess import TextPreprocessor


app = Flask(__name__)

@app.route("/pred", methods=['POST'])
def predict():

    values = request.json['data']

    classifier = CustomModelPrediction.from_path('/opt/data/mlengine')
    print(classifier)
    results = classifier.predict(values)
    ret = '{"prediction":' + str(str(results)) + '}'

    return ret


if __name__ == "__main__":
    app.run(debug=False, host='0.0.0.0', port=5000)