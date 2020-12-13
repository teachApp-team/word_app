class TopController < ApplicationController
  def home
    # render status: 200, json: { message: 'hello world desune-' }
    @wordbooks = WordBook.all
    render :home, formats: :json
  end
end
