from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import pandas as pd
from model_prediction import CustomModelPrediction
from preprocess import TextPreprocessor


app = Flask(__name__)
CORS(app)

@app.route("/pred", methods=['POST'])
def predict():

    values = request.json['data']

    classifier = CustomModelPrediction.from_path('.')
    print(classifier)
    results = classifier.predict(values)
    ret = '{"prediction":' + str(str(results)) + '}'

    return ret


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5002)
