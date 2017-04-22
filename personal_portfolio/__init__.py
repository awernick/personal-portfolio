from flask import Blueprint, Flask, current_app as app

port_app = Blueprint('portfolio', __name__,
                template_folder='templates', static_folder='static',
                static_url_path='/static/')

from . import views

