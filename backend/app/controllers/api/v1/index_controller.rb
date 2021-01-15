class Api::V1::IndexController < ApplicationController
  def index
    @books = WordBook.all
    @columns = Column.all

    response = {
      books: @books,
      columns: @columns
    }
    render json: response
  end
end
