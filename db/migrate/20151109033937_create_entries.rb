class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.integer :sleep_rating, limit: 1 # limit to 1 byte
      t.datetime :bed_time
      t.datetime :wake_time
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
