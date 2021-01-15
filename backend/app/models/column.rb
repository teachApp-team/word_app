# == Schema Information
#
# Table name: columns
#
#  id          :bigint           not null, primary key
#  column_name :string(255)
#  info        :string(255)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Column < ApplicationRecord
  has_many :column_contents, dependent: :destroy
end
