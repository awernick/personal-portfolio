# Simple Role Syntax
# ==================
# Supports bulk-adding hosts to roles, the primary server in each group
# is considered to be the first unless any hosts have the primary
# property set.  Don't declare `role :all`, it's a meta role.

role :app, %w{deployer@alanwernick.com}
role :web, %w{deployer@alanwernick.com}
role :db,  %w{deployer@alanwernick.com}

# Define server(s)
server 'alanwernick.com', user: 'deployer', roles: %w{web}

set :deploy_to, "/var/www/portfolio"
set :stage, :production
