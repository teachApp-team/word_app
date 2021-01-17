class Api::V1::StudentController < ApplicationController
  def show
    student = Student.find(params[:id])
    response = {
      id: student.id,
      name: student.name,
      nickname: student.nickname,
      image: student.image,
      email: student.email
    }
    render json: response
  end
end
