class AddLatLng < ActiveRecord::Migration[5.2]
  def change
		add_column :businesses, :lat, :float
		add_column :businesses, :lng, :float
  end
end
