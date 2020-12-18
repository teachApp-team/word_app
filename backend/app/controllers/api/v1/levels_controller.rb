class Api::V1::LevelsController < ApplicationController
  def show
    level = Level.find(params[:id])
    response = {
      id: level.id,
      name: level.name,
      correct: 30,
      wrong: 10,
      not_yet: level.words.length - 30
    }
    render json: response
  end
end

