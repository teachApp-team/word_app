class CreateWords < ActiveRecord::Migration[6.0]
  def change
    create_table :words do |t|
      t.string :english
      t.string :japanese
      t.string :part
      t.references :level, null: false, foreign_key: true

      t.timestamps
    end
  end
end
