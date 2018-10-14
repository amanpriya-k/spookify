require 'test_helper'

class Api::PlaylistControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_playlist_index_url
    assert_response :success
  end

  test "should get show" do
    get api_playlist_show_url
    assert_response :success
  end

  test "should get create" do
    get api_playlist_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_playlist_destroy_url
    assert_response :success
  end

end
