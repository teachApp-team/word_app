class AddStudentIdColumn < ActiveRecord::Migration[6.0]
  def change
    add_reference :tests, :student, index: true
    add_reference :results, :student, index: true
  end
end
# t.references :student, null: false, foreign_key: true, after: :student
# t.references :student, null: false, foreign_key: true, after: :student
