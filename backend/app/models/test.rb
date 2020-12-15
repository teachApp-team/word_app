# == Schema Information
#
# Table name: tests
#
#  id              :bigint           not null, primary key
#  correct_count   :integer
#  incorrect_count :integer
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
class Test < ApplicationRecord
  has_many :results
  belongs_to :student
  belongs_to :level
end
