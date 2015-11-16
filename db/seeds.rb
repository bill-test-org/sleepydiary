# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Entry.create(
  sleep_rating: 5, 
  bed_time:   DateTime.parse("09/01/2009 23:00"), 
  wake_time:  DateTime.parse("09/02/2009 09:00"),
  )
Entry.create(
  sleep_rating: 5, 
  bed_time:   DateTime.parse("09/02/2009 23:00"), 
  wake_time:  DateTime.parse("09/03/2009 09:00"),
  )
Entry.create(
  sleep_rating: 5, 
  bed_time:   DateTime.parse("09/03/2009 23:00"), 
  wake_time:  DateTime.parse("09/04/2009 09:00"),
  )