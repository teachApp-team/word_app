class WordBook < ApplicationRecord
  has_many :levels
  has_many :words, through: :levels
end
