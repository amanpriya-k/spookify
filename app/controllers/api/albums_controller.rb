class Api::AlbumsController < ApplicationController

  def index
    @albums = Album.all
  end

  def show
    @album = Album.find_by(id: params[:id])
  end

  def saved_albums
    @albums = current_user.saved_albums
    render :index
  end

end
