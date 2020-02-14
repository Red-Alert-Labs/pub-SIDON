import pickle
import os
import numpy as np

class CustomModelPrediction(object):

  def __init__(self, model, processor):
    self._model = model
    self._processor = processor

  def predict(self, instances, **kwargs):
    preprocessed_data = self._processor.transform_text(instances)
    predictions = self._model.predict(preprocessed_data)
    return predictions

  @classmethod
  def from_path(cls, model_dir, cwe):
    import tensorflow.keras as keras
    try:
        model = keras.models.load_model(
          os.path.join(model_dir,'keras_saved_model'+cwe+'.h5'))
        with open(os.path.join(model_dir, 'processor_state'+cwe+'.pkl'), 'rb') as f:
          processor = pickle.load(f)
    except:
        return None

    return cls(model, processor)
