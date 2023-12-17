import pandas as pd
import os
from catboost import CatBoostClassifier

model = CatBoostClassifier()
model.load_model(os.path.join(os.path.dirname(__file__), 'cbm.cbm'))

def predict_quit_probability(data: pd.DataFrame) -> pd.DataFrame:
    """
    Predicts the probability of an employee quitting the company
    """
    data_to_model = data.drop(['Почтовый адрес'], axis=1)
    prediction = model.predict_proba(data_to_model)[:, 0]
    # make new df with predictions and 'Почтовый адрес' column
    prediction_df = pd.DataFrame(prediction, columns=['Вероятность увольнения'])
    prediction_df['Почтовый адрес'] = data['Почтовый адрес']
    return prediction_df
