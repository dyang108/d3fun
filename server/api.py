from app import app
from flask import Flask
from flask_restful import Resource, Api
from apis import *
import json

api = Api(app)

class Twitter(Resource):
  def get(self):
    url = 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=ProgrammableWeb'
    data = twitter_manager.urlopen('GET', url, headers=twitter_header).data
    return json.loads(data.decode('utf-8'))


api.add_resource(Twitter, '/api/twitter')
