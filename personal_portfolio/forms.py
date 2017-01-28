from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField
from wtforms.fields.html5 import EmailField
from wtforms.validators import DataRequired

class ContactForm(FlaskForm):
    first_name  = StringField('First Name', validators=[DataRequired()])
    last_name   = StringField('Last Name', validators=[DataRequired()])
    email       = EmailField('Email', validators=[DataRequired()])
    subject     = StringField('Subject', validators=[DataRequired()])
    message     = TextAreaField('Message', validators=[DataRequired()])
