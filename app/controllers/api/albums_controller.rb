class Api::AlbumsController < ApplicationController

  def index
    @albums = Album.with_attached_cover.all.includes(:artist)
  end

  def show
    @album = Album.find_by(id: params[:id])
  end

  def saved_albums
    @albums = current_user.saved_albums
    render :index
  end

  def save
    @album = Album.find(params[:id])
    current_user.saved_albums << @album
    render :show
  end

  def unsave
    @album = Album.find(params[:id])
    @save = Save.find_by( saveable_id: @album.id,
                          saveable_type: 'Album',
                          user_id: current_user.id)
    @save.destroy
    render :show
  end

  def search
    search_term = params[:search_term]
    @albums = Album.where('lower(title) like ?', "%#{search_term.downcase}%")
    render :index
  end

end
