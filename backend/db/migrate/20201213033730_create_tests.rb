class CreateTests < ActiveRecord::Migration[6.0]
  def change
    create_table :tests do |t|
      t.integer :correct_count, default: 0
      t.integer :incorrect_count, default: 0
      t.references :student, null: false, foreign_key: true
      t.references :level, null: false, foreign_key: true

      t.timestamps
    end
  end
end
