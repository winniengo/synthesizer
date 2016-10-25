Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :tracks, only: [:index, :create, :destroy, :update, :show] #TODO
  end

  root to: "static_pages#root"
end
