class Api::V1::WordBooksController < ApplicationController
  def show
    book = WordBook.find(params[:id])
    level = book.levels.first
    response = {
      text: {
        id: book.id,
        name: book.name,
        description: book.description,
        correct: book.correct,
        wrong: book.wrong,
        not_yet: book.not_yet
      },
      level: {
        id: level.id,
        name: level.name,
        correct: 20,
        wrong: 10,
        not_yet: (level.words.length - 30)
      }
    }
    render json: response
  end
end
