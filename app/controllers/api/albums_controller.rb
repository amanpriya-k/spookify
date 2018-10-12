class Api::AlbumsController < ApplicationController

  def index
    @albums = Album.all
  end

  def show
    @album = Album.find_by(id: params[:albumId])
  end

end
