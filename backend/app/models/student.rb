# == Schema Information
#
# Table name: students
#
#  id         :bigint           not null, primary key
#  email      :string(255)
#  exp_point  :integer          default(0)
#  name       :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  teacher_id :bigint
#
# Indexes
#
#  index_students_on_teacher_id  (teacher_id)
#
# Foreign Keys
#
#  fk_rails_...  (teacher_id => teachers.id)
#
class Student < ApplicationRecord
  has_many :tests
  has_many :results
  belongs_to :teacher, optional: true
end
