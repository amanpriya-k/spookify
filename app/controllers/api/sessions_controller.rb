class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      render :show
    else
      render json: ['Incorrect username or password.'], status: 400
    end
  end

  def destroy
    @user = current_user
    logout
    render :show
  end

end
