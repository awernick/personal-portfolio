from personal_portfolio import app, port_app
from flask import Flask
from flask_mail import Mail
from os import environ

app = Flask(__name__)
app.config.from_object(environ['PORTFOLIO_APP_SETTINGS'])

app.register_blueprint(port_app)
mail = Mail(app)

if __name__ == "__main__":
    app.run()
