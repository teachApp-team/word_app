class CreateStudents < ActiveRecord::Migration[6.0]
  def change
    create_table :students do |t|
      t.string :name
      t.string :email
      t.integer :exp_point, default: 0
      t.references :teacher, foreign_key: true

      t.timestamps
    end
  end
end
