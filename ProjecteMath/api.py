#!/usr/bin/python3
# -*- coding: utf-8 -*-

__author__ = "Laura"

from urllib import request
import flask
import math 
import numpy as np

app = flask.Flask(__name__)
app.config["DEBUG"] = True


@app.route('/suma', methods=['GET'])
def suma():
    query_parameters = flask.request.args

    num1= int(query_parameters.get('num1'))
    num2= int(query_parameters.get('num2'))

    return str(num1+num2)


@app.route('/suma2/<s1>/<s2>', methods=['GET'])
def suma2(s1,s2):
    resultat = {"resultat": int(s1) + int(s2),
                "status": "success"}
    return flask.jsonify(resultat)


@app.route('/eq/<a>/<b>/<c>', methods=['GET'])
def eq2ngrau(a,b,c):
    x1= 0
    x2= 0
    a=float(a)
    b=float(b)
    c=float(c)
    try:

        x1 = (-b+math.sqrt(b**2-(4*a*c)))/(2*a)
        x2 = (-b-math.sqrt(b**2-(4*a*c)))/(2*a)

        equacio = {"valor_a ": a,"valor_b ": b,"valor_c ": c,
                "resultat1": x1 ,"resultat2": x2 ,
                "status": "success"}
        return flask.jsonify(equacio)

    except ValueError:
        error = {"valor_a ": a,"valor_b ": b,"valor_c ": c,
                "status": "error", "descripcio": "Aquesta equació no te solució"}
        return flask.jsonify(error)

@app.route('/matriu', methods=['POST'])
def matriu():
    a = flask.request.json
    a = np.asarray(a["a"])
    
    return flask.jsonify(a.tolist())


@app.route('/matriu/prodesca', methods=['POST'])
def matriu_prod_esca():
    tot = flask.request.json
    a = tot["a"] 
    b = tot["b"]
    a = np.asarray(a)
    b = np.asarray(b)
    prod = np.dot(a,b)
    return flask.jsonify(prod.tolist())

if __name__ == "__main__":
    app.run()