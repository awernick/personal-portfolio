from os import path, environ
basedir = path.abspath(path.dirname(__file__))

class Config(object):
    DEBUG = False
    TESTING = False
    CSRF_ENABLED = True
    SECRET_KEY = 'this-really-needs-to-be-changed'

    # Mail
    MAIL_SERVER = 'smtp.sendgrid.net'
    MAIL_PORT = '587'
    MAIL_USERNAME = environ.get('SENDGRID_USERNAME')
    MAIL_PASSWORD = environ.get('SENDGRID_PASSWORD')


class ProductionConfig(Config):
    DEBUG = False
    SECRET_KEY = environ.get('PORTFOLIO_SECRET_KEY')


class StagingConfig(Config):
    DEVELOPMENT = True
    DEBUG = True


class DevelopmentConfig(Config):
    DEVELOPMENT = True
    DEBUG = True
