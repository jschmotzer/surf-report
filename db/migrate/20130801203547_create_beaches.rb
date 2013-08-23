class CreateBeaches < ActiveRecord::Migration
  def change
    create_table :beaches do |t|
      t.string :location
      t.string :wave_height
      t.text :conditions_description
      t.string :url
      t.string :lat_long
    end
  end
end
