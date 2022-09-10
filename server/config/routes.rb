Rails.application.routes.draw do
  devise_for :users
  # /products
  # /products/1
  get '/products', to: 'products#index'
  get '/products/:id', to: 'products#show'

  post '/sign_in', to: 'users#sign_in'
end
