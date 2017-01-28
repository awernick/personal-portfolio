from os import environ
from flask import Flask
from flask_mail import Mail

app = Flask(__name__)
app.config.from_object(environ['PORTFOLIO_APP_SETTINGS'])

mail = Mail(app)

import views

