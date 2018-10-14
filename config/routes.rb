Rails.application.routes.draw do

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
  end

  namespace :api, defaults: {format: :json} do
    resources :albums, only: [:index, :show] do
      collection do
        get :saved_albums
      end
    end
  end

  namespace :api, defaults: {format: :json} do
    resources :artists, only: [:index, :show] do
      collection do
        get :followed_artists
      end
    end
  end

  namespace :api, defaults: {format: :json} do
    resources :playlists, only: [:index, :show, :create, :destroy] do
      collection do
        get :followed_playlists
      end
    end
  end

  namespace :api, defaults: {format: :json} do
    resources :playlist_songs, only: [:create, :destroy]
  end

  namespace :api, defaults: {format: :json} do
    resources :songs, only: [:index] do
      collection do
        get :saved_songs
      end
    end
  end

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :destroy, :show, :index]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
