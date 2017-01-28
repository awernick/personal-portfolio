server 'alanwernick.com'
desc 'Install dependencies in venv'
task :pip_install do
  on roles(:app) do |host|
    within("#{current_path}") do
      execute "cd #{current_path}; venv/bin/pip install -r requirements.txt"
    end
  end
end
