class CreateResults < ActiveRecord::Migration[6.0]
  def change
    create_table :results do |t|
      t.boolean :is_correct
      # t.references :student, null: false, foreign_key: true, after: :student
      t.references :test, null: false, foreign_key: true
      t.references :word, null: false, foreign_key: true

      t.timestamps
    end
  end
end
