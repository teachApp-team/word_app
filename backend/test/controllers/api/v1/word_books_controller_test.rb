require 'test_helper'

class Api::V1::WordBooksControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get api_v1_word_books_show_url
    assert_response :success
  end

end
