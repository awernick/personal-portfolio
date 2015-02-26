# Preview all emails at http://localhost:3000/rails/mailers/contact_mailer
class ContactMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/contact_mailer/contact_me
  def contact_me
    email_params = {'first_name' => 'Alan', 'last_name' => 'Wernick', 'subject' => 'Hello!'}
    ContactMailer.contact_me(email_params)
  end

end
