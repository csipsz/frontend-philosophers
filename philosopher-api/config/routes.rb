Rails.application.routes.draw do
  resources :notes
  resources :philosophers
  resources :branches
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
