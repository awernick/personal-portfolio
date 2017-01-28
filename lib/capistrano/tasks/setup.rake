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

  desc 'Install yarn dependencies'
  task :yarn do
    on roles(:app) do |host|
      within("#{current_path}") do
        execute "cd #{current_path}; yarn"
      end
    end
  end

  desc 'Generate static assets'
  task :generate_assets do
    on roles(:app) do |host|
      within("#{current_path}") do
        execute "cd #{current_path}; gulp"
      end
    end
  end
end
