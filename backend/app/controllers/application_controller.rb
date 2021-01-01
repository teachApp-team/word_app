class ApplicationController < ActionController::API
        protect_from_forgery with: :exception
        include DeviseTokenAuth::Concerns::SetUserByToken
        skip_before_action :verify_authenticity_token, if: :devise_controller? # APIではCSRFチェックをしない
end
