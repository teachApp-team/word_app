class TopController < ApplicationController
  def home
    render status: 200, json: { message: 'hello world desune-' }
  end
end
