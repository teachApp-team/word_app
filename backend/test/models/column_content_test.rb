# == Schema Information
#
# Table name: column_contents
#
#  id            :bigint           not null, primary key
#  content       :text(65535)
#  content_title :string(255)
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  column_id     :bigint
#
# Indexes
#
#  index_column_contents_on_column_id  (column_id)
#
# Foreign Keys
#
#  fk_rails_...  (column_id => columns.id)
#
require 'test_helper'

class ColumnContentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
