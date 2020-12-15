class Api::V1::ResultsController < ApplicationController

  def create
    @word = Word.find(params[:word_id])
    @test = Test.find(params[:test])
    @result = @test.results.create!(word_id: @word, student_id: 1, is_correct: params[:is_correct])
    if params[:is_correct]
      @test.is_correct += 1
    else
      @test.is_incorrect += 1
    end
    @test.save
    render json: { messge: 'ok' }
  end

  def test
    @test = Test.first
    render json: { mesage: "heyeheh", test: @test }
  end
end
