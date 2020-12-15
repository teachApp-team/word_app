# == Schema Information
#
# Table name: words
#
#  id         :bigint           not null, primary key
#  english    :string(255)
#  japanese   :string(255)
#  part       :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  level_id   :bigint           not null
#
# Indexes
#
#  index_words_on_level_id  (level_id)
#
# Foreign Keys
#
#  fk_rails_...  (level_id => levels.id)
#
require 'test_helper'

class WordTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
