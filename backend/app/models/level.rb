class Level < ApplicationRecord
  has_many :words
  has_many :tests
  belongs_to :word_book

  def words_count
    words.length
  end
end
