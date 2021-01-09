class CreateColumnContents < ActiveRecord::Migration[6.0]
  def change
    create_table :column_contents do |t|
      t.string :content_title
      t.text :content
      t.references :column, foreign_key: true
      t.timestamps
    end
  end
end
