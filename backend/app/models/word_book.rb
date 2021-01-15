# == Schema Information
#
# Table name: word_books
#
#  id          :bigint           not null, primary key
#  category    :string(255)
#  description :text(65535)
#  image       :string(255)
#  name        :string(255)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class WordBook < ApplicationRecord
  mount_uploader :image, ImageUploader
  has_many :levels
  has_many :words, through: :levels

  def correct
    20
  end

  def wrong
    30
  end

  def not_yet
    words.length - (correct + wrong)
  end
end
