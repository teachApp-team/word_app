class AddImageToWordBooks < ActiveRecord::Migration[6.0]
  def change
    add_column :word_books, :image, :string
  end
end
