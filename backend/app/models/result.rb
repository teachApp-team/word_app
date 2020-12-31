# == Schema Information
#
# Table name: results
#
#  id         :bigint           not null, primary key
#  is_correct :boolean
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  student_id :bigint
#  test_id    :bigint           not null
#  word_id    :bigint           not null
#
# Indexes
#
#  index_results_on_student_id  (student_id)
#  index_results_on_test_id     (test_id)
#  index_results_on_word_id     (word_id)
#
# Foreign Keys
#
#  fk_rails_...  (test_id => tests.id)
#  fk_rails_...  (word_id => words.id)
#
class Result < ApplicationRecord
  belongs_to :student
  belongs_to :test
  belongs_to :word
end
