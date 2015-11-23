class Entry < ActiveRecord::Base
  belongs_to :user

  validates :sleep_rating, :bed_time, :wake_time, presence: true
  
end
