from os import environ
from flask import Flask

app = Flask(__name__)
app.config.from_object(environ['APP_SETTINGS'])

import views

