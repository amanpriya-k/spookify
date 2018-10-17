class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 400
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render :show
    else
      render json: ['Unable to update. Please try again.'], status: 400
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def index
    @users = User.all
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    render :show
  end

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

  def follow
    user_to_follow = User.find(params[:other_user_id])
    current_user.following << user_to_follow
    @users = [current_user, User.find(user_to_follow.id)]
    render :index
  end

  def unfollow
    user_to_unfollow = User.find(params[:other_user_id])
    follow = UserFollow.find_by(follower_id: current_user.id, followee_id: user_to_unfollow.id)
    UserFollow.destroy(follow.id)
    @users = [current_user, User.find(user_to_unfollow.id)]
    render :index
  end

  def search
    search_term = params[:search_term]
    # sql = "SELECT * FROM users WHERE lower(username) LIKE '#{search_term}' ORDER BY LOCATE(username , '#{search_term}')"
    @users = User.where('lower(username) like ?', "%#{search_term.downcase}%").limit(5)
    # @users = User.find_by_sql(sql)
    # @users = User.where('lower(username) like ?', "%#{search_term.downcase}%").order(username.index_of(search_term)).limit(5)
    render :index
  end

end
