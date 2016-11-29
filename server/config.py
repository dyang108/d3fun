from app import app
from flask_mongoalchemy import MongoAlchemy
from flask_restful import Resource, Api
import json
app.config['MONGOALCHEMY_DATABASE'] = 'library'
