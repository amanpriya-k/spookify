class Api::PlaylistSongsController < ApplicationController

  def create
    @playlist_song = PlaylistSong.new(params.require(:playlist_song).permit(:song_id, :playlist_id))
    if @playlist_song.save
      render 'api/playlist/_playlist', playlist: @playlist_song.playlist
    else
      render json: ["Unable to add song to playlist"], status: 401
    end
  end

  def destroy
    @playlist_song = PlaylistSong.find(params[:id])
    @playlist_song.delete
  end

end
