from apis import *
from config import app
from flask_restful import Api, Resource
import json
from flask_pymongo import PyMongo
from bson import json_util
from flask import jsonify

api = Api(app)
mongo = PyMongo(app)

class ApiList(Resource):
  def get(self):
    cursor = mongo.db.Source.find(projection={'name': True, 'description': True})
    json_ret = []
    for elem in cursor:
      elem['_id'] = str(elem['_id'])
      json_ret.append(elem)
    return jsonify(json_ret)
    # Source.query.fields(Source.name, Source.description).raw_output().all()
    # return 'hi'

api.add_resource(ApiList, '/api/list')

class Twitter(Resource):
  def get(self):
    url = 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=ProgrammableWeb'
    data = twitter_manager.urlopen('GET', url, headers=twitter_header).data
    return json.loads(data.decode('utf-8'))

api.add_resource(Twitter, '/api/twitter')
