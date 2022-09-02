Rails.application.routes.draw do
  
  root to: "static_pages#root"
  
  namespace :api, defaults: { format: :json} do
    resources :users, only: [:index, :create, :show]
    resource :session, only: [:create, :destroy]
		resources :businesses, only: [:create, :index, :show] do
		collection do
			get :search, to: "businesses#search", as: "search"
		end
		end
  end
end
