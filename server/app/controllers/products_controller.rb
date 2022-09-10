class ProductsController < ApplicationController
  def index
    products = Product.all

    render json: products
  end

  def show
    unless current_user
      return render json: {
        message: 'you need to sign in'
      }, status: 403
    end

    product = Product.find(params[:id])

    render json: product
  end
end
