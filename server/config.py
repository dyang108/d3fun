from flask import Flask, send_file

app = Flask(__name__)
# set the database name
app.config['MONGO_DBNAME'] = 'library'

@app.route("/")
def index():
  return send_file("../templates/index.html")
