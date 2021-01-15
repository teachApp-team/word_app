# == Schema Information
#
# Table name: columns
#
#  id          :bigint           not null, primary key
#  column_name :string(255)
#  info        :string(255)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'test_helper'

class ColumnTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
