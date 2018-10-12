Rails.application.routes.draw do

  namespace :api do
    get 'songs/index'
  end
  namespace :api do
    get 'artists/index'
    get 'artists/show'
  end
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
  end

  namespace :api, defaults: {format: :json} do
    resources :albums, only: [:index, :show]
  end

  namespace :api, defaults: {format: :json} do
    resources :artists, only: [:index, :show]
  end

  namespace :api, defaults: {format: :json} do
    resources :songs, only: [:index]
  end

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :destroy, :show, :index]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
