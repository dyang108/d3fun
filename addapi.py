from server import *
from server.models import *
from flask import Flask

app = Flask(__name__)

name = raw_input()
# initialize Source object
route = raw_input()
while route != '':
  # add to source route list and insert SourceRoute object
  route = raw_input()

