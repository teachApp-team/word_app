class Api::V1::ColumnsController < ApplicationController
  def show
    @column = Column.find(params[:id])
    @contents = @column.column_contents.map do |c|
      {
        content_title: c.content_title,
        content: c.content,
      }
    end

    response = {
      id: @column.id,
      title: @column.column_name,
      message: @column.info,
      contents: @contents
    }
    render json: response
  end
end
