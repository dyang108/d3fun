from config import *

db = MongoAlchemy(app)

class SourceRoute(db.Document):
  url = db.StringField()
  name = db.StringField(required=False)
  description = db.StringField(required=False)

# Source is an object that contains the necessary information for
# an API source
# needs: a name, list of routes
# maybe: a description
class Source(db.Document):
  name   = db.StringField()
  routes = db.SetField(db.RefField(db.DocumentField(SourceRoute)))
  description = db.StringField(required=False)

