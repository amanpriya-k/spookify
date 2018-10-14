class Api::SongsController < ApplicationController

  def index
    @songs = Song.all
  end

  def saved_songs
    @songs = current_user.saved_songs
    render :index
  end

end
