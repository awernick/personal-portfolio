Rails.application.routes.draw do

  # Index
  root 'portafolio#index'

  # Portfolio Routes
  get 'portfolio'   =>  'portafolio#portfolio'
  get 'contact'     =>  'portafolio#contact'
  get 'resume'      =>  'portafolio#resume'

end
