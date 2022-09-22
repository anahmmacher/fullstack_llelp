class Api::BusinessesController < ApplicationController
	def index
      	#@businesses = bounds ? Business.in_bounds(bounds) : Business.all
				@businesses = Business.all
        render :index
  end

	def show
    @business = Business.find(params[:id])
    if @business
      render :show
    else
      render json: @business.errors.full_messages, status: 404
  	end
	end

	def create
        @business = Business.create!(business_params)
        render :show
    end

	def search
		query = params[:query]

    @businesses = Business.find_businesses(query)
    if (@businesses.length > 0) 
      render :index
    else 
      render json: ["No results found for #{query}"], status: 404
    end
	end

	private

  def business_params
    params.require(:business).permit(:name, :address, :city, :state, :zip_code, :lat, :lng, :phone_number, :website, :open, :close, :category, :price,)
  end

	def bounds
		params[:bounds]
	end

	def query
		params[:query]
	end
end
