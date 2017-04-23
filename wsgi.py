from personal_portfolio import app, port_app
from speech2text import speech_app
from flask import Flask, url_for, jsonify
from flask_mail import Mail
from os import environ

app = Flask(__name__)
app.config.from_object(environ['PORTFOLIO_APP_SETTINGS'])
mail = Mail(app)

app.register_blueprint(port_app)
app.register_blueprint(speech_app, url_prefix='/speech')

def has_no_empty_params(rule):
    defaults = rule.defaults if rule.defaults is not None else ()
    arguments = rule.arguments if rule.arguments is not None else ()
    return len(defaults) >= len(arguments)

@app.route("/site-map")
def site_map():
    links = []
    for rule in app.url_map.iter_rules():
        # Filter out rules we can't navigate to in a browser
        # and rules that require parameters
        if "GET" in rule.methods and has_no_empty_params(rule):
            url = url_for(rule.endpoint, **(rule.defaults or {}))
            links.append((url, rule.endpoint))
    return jsonify(links)

if __name__ == "__main__":
    app.run()
