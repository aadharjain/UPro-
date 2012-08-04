#! /usr/bin/env python

from bottle import *

# Main Page
@get('/')
def index():  
  return template('views/index', rendInfo)
  
# Error 404
@error(404)
def error404(error):
  return "Sorry, can't find that page!"

debug(True)
run(host='localhost', port=8000, reload=True)
