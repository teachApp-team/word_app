class CreateTests < ActiveRecord::Migration[6.0]
  def change
    create_table :tests do |t|
      t.integer :correct_count
      t.integer :incorrect_count
      t.references :student, null: false, foreign_key: true
      t.references :level, null: false, foreign_key: true

      t.timestamps
    end
  end
end
