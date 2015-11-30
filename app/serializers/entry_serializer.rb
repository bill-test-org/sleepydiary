class EntrySerializer < ActiveModel::Serializer
  attributes :id, :bed_time, :wake_time, :sleep_rating
end
