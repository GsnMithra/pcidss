import pandas as pds
from flask_cors import CORS
from flask import Flask, jsonify, request, make_response

app = Flask(__name__)
CORS(app, resources={r'/autofill': {'origins': '*'}})

a = pds.read_csv('data/a.csv')
b = pds.read_csv('data/b.csv')
c = pds.read_csv('data/c.csv')
p2pe = pds.read_csv('data/p2pe.csv')

def applyFrozen(saqs):
    for saq in saqs:
        saq['antecedents'] = saq['antecedents'].apply (lambda x: frozenset(eval(x)))
        saq['consequents'] = saq['consequents'].apply (lambda x: frozenset(eval(x)))
    return saqs

a, b, c, p2pe = applyFrozen([a, b, c, p2pe])

def predictRelatedQuestions(question, rules):
    related_rules = rules[rules['antecedents'] == {question}]
    if related_rules.empty:
        return []

    all_related_questions = set()
    for index, row in related_rules.iterrows():
        all_related_questions.update(row['consequents'])

    all_related_questions = [int(q[1:]) for q in all_related_questions]
    return sorted(all_related_questions)

@app.route('/autofill', methods=['POST'])
def autofill():
    question = request.json['question']
    saq_type = request.json['saq_type'].split(' ')
    if len(saq_type) == 1:
        saq_type = saq_type[0].lower()
    else:
        saq_type = saq_type[1].lower()
    
    saq_mapper = { 'a': a, 'b': b, 'c': c, 'p2pe': p2pe }
    
    result = predictRelatedQuestions(question, saq_mapper[saq_type])
    result = [r for r in result]
    return jsonify(result)

app.run(host='0.0.0.0',port=6969, debug=True)