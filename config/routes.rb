Rails.application.routes.draw do

  # Index
  root 'portfolio#index'

  # Portfolio Routes
  post 'send_email'         =>  'portfolio#send_contact_email'
  get  'portfolio'          =>  'portfolio#portfolio'
  get  'contact'            =>  'portfolio#contact'
  get  'resume'             =>  'portfolio#resume'
end
