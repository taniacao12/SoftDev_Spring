import os
import random
import datetime

from flask import Flask, redirect, url_for, render_template, session, request, flash, get_flashed_messages

app = Flask(__name__)
app.secret_key = os.urandom(32)

@app.route('/', methods=['POST','GET'])
def index():
    return render_template("index.html")

if __name__ == '__main__':
    app.debug = True
    app.run()
