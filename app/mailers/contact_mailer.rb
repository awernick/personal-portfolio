class ContactMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.contact_mailer.contact_me.subject
  #
  def contact_me(email_params)
    @contact_info = email_params

    mail from: "ccasas@utep.edu", to: "alan.wernik@gmail.com", subject: "#{ @contact_info['subject'] }"
  end
end
