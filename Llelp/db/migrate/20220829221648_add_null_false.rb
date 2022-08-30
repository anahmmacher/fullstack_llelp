class AddNullFalse < ActiveRecord::Migration[5.2]
  def change
		change_column_null :businesses, :lat, false
		change_column_null :businesses, :lng, false
		change_column_null :businesses, :state, false
  end
end
