from flask import Flask, send_file

app = Flask(__name__)

@app.route("/")
def index():
  return send_file("../templates/index.html")
