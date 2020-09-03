import json
import os

from flask import Flask, render_template, send_from_directory
app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template(
        'index.html', 
        bundle = json.load(open("dist/manifest.json"))
    )

@app.route('/public/<path:path>')
def send_js(path):
    return send_from_directory("dist", path)
