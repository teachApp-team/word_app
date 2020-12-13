class Student < ApplicationRecord
  has_many :tests
  has_many :results
  belongs_to :teacher, optional: true
end
