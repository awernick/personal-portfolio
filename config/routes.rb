Rails.application.routes.draw do

  # Index
  root 'portafolio#index'

  # Portfolio Routes
  post 'send_email'         =>  'portafolio#send_contact_email'
  get  'portfolio'          =>  'portafolio#portfolio'
  get  'contact'            =>  'portafolio#contact'
  get  'resume'             =>  'portafolio#resume'
end
