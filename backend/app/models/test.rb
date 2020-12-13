class Test < ApplicationRecord
  has_many :results
  belongs_to :student
  belongs_to :level
end
