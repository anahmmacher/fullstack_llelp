class FixLatLng < ActiveRecord::Migration[5.2]
  def change
		change_column :businesses, :lat, :decimal
		change_column :businesses, :lng, :decimal
		add_column :businesses, :state, :text
  end
end
