from server import *
from server.models import *
from flask import Flask

name = raw_input('Source Name: ')
url = raw_input('Base Url:')
# initialize Source object
source = Source.query.filter(Source.name == name).first()
if source is None:
  source = Source(name=name, base_url=url, routes=set())
  source.save()

route = raw_input()
while route != 'QUIT':
  # add to source route list and insert SourceRoute object
  rt = SourceRoute(url=route, source=source.mongo_id)
  rt.save()
  source.routes.add(rt.mongo_id)
  source.save()
  route = raw_input()
