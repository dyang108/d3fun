from flask import Flask, send_file
from flask_mongoalchemy import MongoAlchemy

app = Flask(__name__)

# only necessary for addapi.py script
app.config['MONGOALCHEMY_DATABASE'] = 'library'

db = MongoAlchemy(app)

class SourceRoute(db.Document):
  url = db.StringField()
  name = db.StringField(required=False)
  description = db.StringField(default='')
  source = db.StringField()

# Source is an object that contains the necessary information for
# an API source
# needs: a name, list of routes
# maybe: a description
class Source(db.Document):
  name   = db.StringField()
  base_url = db.StringField()
  routes = db.SetField(db.SRefField(SourceRoute))
  description = db.StringField(default='')
