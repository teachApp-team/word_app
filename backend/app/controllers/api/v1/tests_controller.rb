class Api::V1::TestsController < ApplicationController

  def start
    # params[:level_id]
    # params[:student_id]
    # params[:count]
    @level = Level.find(1) 
    @words = @level.words.get_testable(student_id: 1, limit: 10)
    render json: @words
  end

  def new
    @words = Word.all
    render :new
  end
end
