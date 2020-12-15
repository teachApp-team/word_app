# == Schema Information
#
# Table name: tests
#
#  id              :bigint           not null, primary key
#  correct_count   :integer          default(0)
#  incorrect_count :integer          default(0)
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  level_id        :bigint           not null
#  student_id      :bigint           not null
#
# Indexes
#
#  index_tests_on_level_id    (level_id)
#  index_tests_on_student_id  (student_id)
#
# Foreign Keys
#
#  fk_rails_...  (level_id => levels.id)
#  fk_rails_...  (student_id => students.id)
#
require 'test_helper'

class TestTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
