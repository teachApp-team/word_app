class Api::V1::ResultsController < ApplicationController

  def create
    @word = Word.find(params[:word_id])
    @test = Test.find(params[:test])
    @result = @test.results.create!(word_id: @word, student_id: 1)
  end
end
