class Api::SongsController < ApplicationController

  def index
    @songs = Song.all.includes(:album).includes(album: :artist)
  end

  def saved_songs
    @songs = current_user.saved_songs
    render :index
  end

  def save
    @song = Song.find(params[:id])
    current_user.saved_songs << @song
    render :show
  end

end
