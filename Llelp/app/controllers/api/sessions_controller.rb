class Api::SessionsController < ApplicationController
	def create

	@user = User.find_by_credentials(
		params[:user][:email],
		params[:user][:password]
	)

		if @user.nil?
			render json: ['Invalid credentials'], status: 401
		else
			login!(@user)
			render 'api/users/show.json.jbuilder';
		end
	end

	def destroy
		@user = current_user
		if @user

		logout!
		render json: {}
		else
			render json: ['Nobody is signed in'], status: 404
		end
	end
end
