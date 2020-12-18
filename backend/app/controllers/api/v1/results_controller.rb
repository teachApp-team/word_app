class Api::V1::ResultsController < ApplicationController

  def create
    @word = Word.find(params[:word_id])
    @test = Test.find(params[:test_id])
    @result = @test.results.create(word_id: @word.id, student_id: 1, is_correct: params[:is_correct])
    @test.save
    render json: { messge: 'ok' }
  end

  def test
    @test = Test.first
    render json: { mesage: "heyeheh", test: @test }
  end
end
