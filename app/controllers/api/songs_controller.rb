class Api::SongsController < ApplicationController

  def index
    @songs = Song.all.includes(:album)
    # @songs = Song.all.includes(:album).includes(album: :artist)
  end

  def show
    @song = Song.find_by(id: params[:id])
    render :show
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

  def unsave
    @song = Song.find(params[:id])
    @save = Save.find_by( saveable_id: @song.id,
                          saveable_type: 'Song',
                          user_id: current_user.id)
    @save.destroy
    render :show
  end

  def search
    search_term = params[:search_term]
    @songs = Song.where('lower(name) like ?', "%#{search_term.downcase}%")
    render :index
  end

end
