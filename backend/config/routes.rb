Rails.application.routes.draw do
  root 'top#home'
  namespace :api, { format: 'json' } do
    namespace :v1 do
      resources :tests, only: [:new, :create]
      get 'tests/start', to: "tests#start"
      get 'tests/finish/:test_id', to: "tests#finish"
      post 'results/create', to: "results#create"
      resources :word_books, only: [:show]
      resources :levels, only: [:show]
    end
  end
end
