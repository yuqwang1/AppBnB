class Api::SessionsController < ApplicationController
  def create
    # debugger
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ["invalid credentials"], status: 401
    end
  end

  def destroy
    logout
    render json: {}
  end
end
