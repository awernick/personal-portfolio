from flask import g, render_template, abort, request, redirect
from . import app, mail
from .forms import ContactForm
from flask_mail import Message

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/resume')
def resume():
    return render_template('resume.html')

@app.route('/portfolio')
def portfolio():
    return render_template('portfolio.html')

@app.route('/contact')
def contact():
    form = ContactForm()
    return render_template('contact.html', form=form)

@app.route('/contact', methods=['POST'])
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
        mail.send(msg)
        return redirect('/contact')
    html = render_template('contact.html', form=form)
    print(html)
    return html

