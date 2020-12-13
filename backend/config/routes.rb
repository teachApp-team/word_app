Rails.application.routes.draw do
  root 'top#home'
  namespace :api, { format: 'json' } do
    namespace :v1 do
      resources :tests, only: [:new, :create]
      get 'tests/start', to: "tests#start"
    end
  end
end
