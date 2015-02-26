# Simple Role Syntax
# ==================
# Supports bulk-adding hosts to roles, the primary server in each group
# is considered to be the first unless any hosts have the primary
# property set.  Don't declare `role :all`, it's a meta role.

role :app, %w{deployer@napkin-studio.com}
role :web, %w{deployer@napkin-studio.com}
role :db,  %w{deployer@napkin-studio.com}

# Define server(s)
server 'napkin-studio.com', user: 'deployer', roles: %w{web}

set :deploy_to, "/var/www/portfolio"
set :stage, :production
