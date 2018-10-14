class Api::ArtistsController < ApplicationController
  def index
    @artists = Artist.all
  end

  def show
    @artist = Artist.find_by(id: params[:id])
  end

  def followed_artists
    @artists = current_user.followed_artists
    render :index
  end

end
