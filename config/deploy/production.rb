# -- Server --------------------------------------------------------------------
server 'alanwernick.com', user: 'deployer', roles: %w{app db web} 

# -- Hooks ---------------------------------------------------------------------
after "deploy", "deploy:virtualenv"
after "deploy", "deploy:pip_install"
after "deploy", "deploy:yarn"
after "deploy", "deploy:generate_assets"


