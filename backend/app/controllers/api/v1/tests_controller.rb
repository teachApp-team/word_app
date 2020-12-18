class Api::V1::TestsController < ApplicationController

  def start
    @level = Level.find(1) 
    @test = Test.create!(student_id: 1, level_id: @level.id)
    @words = @level.words.get_testable(student_id: 1, limit: 10)
    render json: @words.push(@test.id)
  end

  def finish
    @test = Test.find(params[:test_id])
    @results = @test.words.map do |w|
      {
        japanese: w.japanese,
        englifh: w.english,
        part: w.part,
        wrong_count: w.wrong_count(1)
      }
    end
    render json: @results
  end

  def new
    @words = Word.all
    render :new
  end
end
