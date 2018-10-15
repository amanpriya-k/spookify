class Api::ArtistsController < ApplicationController
  def index
    @artists = Artist.with_attached_photo.all
  end

  def show
    @artist = Artist.find_by(id: params[:id])
  end

  def followed_artists
    @artists = current_user.followed_artists
    render :index
  end

  def follow
    @artist = Artist.find(params[:id])
    current_user.followed_artists << @artist
    render :show
  end

  def unfollow
    @artist = Artist.find(params[:id])
    @follow = Follow.find_by( followable_id: @artist.id,
                          followable_type: 'Artist',
                          user_id: current_user.id)
    @follow.destroy
    render :show
  end

end
