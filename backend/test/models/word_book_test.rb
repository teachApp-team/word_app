# == Schema Information
#
# Table name: word_books
#
#  id          :bigint           not null, primary key
#  category    :string(255)
#  description :text(65535)
#  image       :string(255)
#  name        :string(255)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'test_helper'

class WordBookTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
