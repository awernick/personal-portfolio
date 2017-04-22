from flask import g, render_template, abort, request, redirect, flash, current_app
from . import port_app
from .forms import ContactForm
from flask_mail import Message, Mail

@port_app.route('/')
def index():
    return render_template('index.html')

@port_app.route('/resume')
def resume():
    return render_template('resume.html')

@port_app.route('/portfolio')
def portfolio():
    return render_template('portfolio.html')

@port_app.route('/contact')
def contact():
    form = ContactForm()
    return render_template('contact.html', form=form)

@port_app.route('/contact', methods=['POST'])
def create_contact_form():
    form = ContactForm()
    if form.validate_on_submit():
        msg = Message(form.subject.data,
                      sender=form.email.data,
                      recipients=["alan.wernik@gmail.com"])

        msg.html = render_template('message.html',
                                   first_name=form.first_name.data,
                                   last_name=form.last_name.data,
                                   message=form.message.data)
        mail = Mail(app)
        mail.send(msg)
        flash('Thank you! I will be in contact with you soon.', 'success')
        return redirect('/contact')
    flash('Please fill in all fields and try again.', 'danger')
    return render_template('contact.html', form=form)

