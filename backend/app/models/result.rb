class Result < ApplicationRecord
  belongs_to :student
  belongs_to :test
  belongs_to :word
end
