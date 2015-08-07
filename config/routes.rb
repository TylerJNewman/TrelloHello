Rails.application.routes.draw do
  devise_for :users
  namespace :api do
      resources :boards, only: [:index, :create, :show] do
        resources :lists, only: [:index]
      end
      resources :lists, only: [:show]
    end

  root to: "static_pages#index"

end
