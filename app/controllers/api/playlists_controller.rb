class Api::PlaylistsController < ApplicationController

  def index
    @playlists = Playlist.with_attached_image.all
  end

  def show
    # debugger
    @playlist = Playlist.find_by(id: params[:id])
  end

  def create
    @playlist = Playlist.new(params.require(:playlist).permit(:name))
    @playlist.user_id = current_user.id

    if @playlist.save
      current_user.followed_playlists << @playlist
      render :show
    else
      render json: ["Unable to create playlist"], status: 401
    end
  end

  def destroy
    @playlist = Playlist.find_by(id: params[:id])
    @playlist.destroy
    @playlists = current_user.followed_playlists
    render :index
  end

  def followed_playlists
    @playlists = current_user.followed_playlists
    render :index
  end

  def follow
    @playlist = Playlist.find(params[:id])
    current_user.followed_playlists << @playlist
    render :show
  end

  def unfollow
    @playlist = Playlist.find(params[:id])
    @follow = Follow.find_by( followable_id: @playlist.id,
                          followable_type: 'Playlist',
                          user_id: current_user.id)
    @follow.destroy
    render :show
  end

  def remove_song_from_playlist
    @playlist = Playlist.find(params[:id])

    song_id = params[:song_id]
    @playlist_song = PlaylistSong.find_by(playlist_id: @playlist.id, song_id: song_id)
    PlaylistSong.destroy(@playlist_song.id)
    @playlist = Playlist.find(params[:id])

    # debugger
    render :show
  end

  def search
    search_term = params[:search_term]
    @playlists = Playlist.where('lower(name) like ?', "%#{search_term.downcase}%")
    render :index
  end

end
