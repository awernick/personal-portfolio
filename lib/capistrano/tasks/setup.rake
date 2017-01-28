server 'alanwernick.com'

namespace :deploy do
  desc 'Create VENV and activates it'
  task :virtualenv do
    on roles(:app) do |host|
      within("#{current_path}") do
        execute "cd #{current_path}; virtualenv venv"
      end
    end
  end

  desc 'Install dependencies in venv'
  task :pip_install do
    on roles(:app) do |host|
      within("#{current_path}") do
        execute "cd #{current_path}; venv/bin/pip install -r requirements.txt"
      end
    end
  end

  desc 'Restart nginx and portfolio service'
  task :restart do
    on roles(:app) do |host|
      within("#{current_path}") do
        execute "sudo systemctl restart portfolio"
      end
    end
  end
end
