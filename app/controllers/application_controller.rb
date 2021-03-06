class ApplicationController < ActionController::Base
  helper_method :current_user, :require_login, :logged_in?

  def login(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def require_login
    render json: ['You are not logged in '], status: 401 unless logged_in?
  end

  def logged_in?
    !!current_user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
  end
end
