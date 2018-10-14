Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"
  namespace :api, defaults: { format: 'json' } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :bookings, only: [:create, :index, :show, :update]
    resources :spots, only: [:create, :index, :show, :update] do
      resources :reviews, only: [:create, :index, :show]
    end

    resources :reviews, only: [:destroy]
  end
end
