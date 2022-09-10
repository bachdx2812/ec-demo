require 'json_web_token'

class UsersController < ApplicationController
  def sign_in
    # @params: email
    # @params: password
    # out: {
    #   message: "success",
    #   token: "jklwjklewqjklejiojkl"
    # }
    puts "dit me may params day: #{params}"

    @user = User.find_by(email: params[:email])
    if @user && @user.valid_password?(params[:password])
      render json: {
        message: 'sucesss',
        token: JsonWebToken.encode({
                                     sub: @user.id
                                   })
      }
    else
      render json: {
        message: 'failed'
      }, status: 400
    end
  end
end
