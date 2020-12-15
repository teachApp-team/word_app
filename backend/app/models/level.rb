# == Schema Information
#
# Table name: levels
#
#  id           :bigint           not null, primary key
#  exp_point    :integer
#  name         :string(255)
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  word_book_id :bigint           not null
#
# Indexes
#
#  index_levels_on_word_book_id  (word_book_id)
#
# Foreign Keys
#
#  fk_rails_...  (word_book_id => word_books.id)
#
class Level < ApplicationRecord
  has_many :words
  has_many :tests
  belongs_to :word_book

  def words_count
    words.length
  end
end
