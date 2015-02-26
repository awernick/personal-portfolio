class PortafolioController < ApplicationController

  def index
  end

  def resume
  end

  def portfolio
  end

  def contact
  end

  def send_contact_email
    email_params = params.permit(:first_name, :last_name, :email, :subject, :message)
    ContactMailer.contact_me(email_params).deliver_now
    flash[:info] = "Thank You! I will be getting in contact with you soon."
    redirect_to contact_path
  end
end
