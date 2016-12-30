from flask import g, render_template, abort, request, redirect
from . import app
from .forms import ContactForm

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
        return redirect('/contact')
    print("Could not validate");
    return render_template('contact.html', form=form)

