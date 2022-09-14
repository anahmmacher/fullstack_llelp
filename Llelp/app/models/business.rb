class Business < ApplicationRecord
	validates :name, :category, :address, :city, :lat, :lng, :state, :zip_code, :phone_number, :close,:open, :price, presence: true

	def self.in_bounds(bounds)
		self.where("lat < ?", bounds[:northEast][:lat])
				.where("lat > ?", bounds[:southWest][:lat])
				.where("lng > ?", bounds[:southWest][:lng])
				.where("lng < ?", bounds[:northEast][:lng])
	end

	#def self.by_city_and_state(city_and_state)
		#self.where("CONCAT(city, ', ', state) ILIKE ?", "%#{city_and_state}%")
	#end

	#def self.by_zip_code(zip_code)
		#self.where("zip_code ILIKE ?", "%#{zip_code}")
	#end
	
	#def self.by_full_address(full_address)
		#self.where("CONCAT(address, ', ', city, ', ', state) ILIKE ?", "%#{full_address}%")
	#end

	def self.find_businesses(point_of_interest)
		self.where("name ILIKE ? OR category ILIKE ?", "%#{point_of_interest}%", "%#{point_of_interest}%")
	end

	def self.find_location(location)
		self.where("zip_code ILIKE ? OR CONCAT(city, ', ', state) ILIKE ? OR CONCAT(address, ', ', city, ', ', state) ILIKE ?", "%#{location}", "%#{location}%", "%#{location}%")
	end
end
