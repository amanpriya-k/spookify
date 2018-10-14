require 'test_helper'

class Api::PlaylistsongsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_playlistsongs_index_url
    assert_response :success
  end

  test "should get show" do
    get api_playlistsongs_show_url
    assert_response :success
  end

  test "should get create" do
    get api_playlistsongs_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_playlistsongs_destroy_url
    assert_response :success
  end

end
