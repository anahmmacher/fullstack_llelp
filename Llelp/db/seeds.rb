# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



User.destroy_all


user1 = User.create!(first_name: 'John', last_name: 'Doe', email: 'test1@mail.com', password: '123456')
user2 = User.create!(first_name: 'Jane', last_name: 'Doe', email: 'test2@mail.com', password: '123456')
user3 = User.create!(first_name: 'Al', last_name: 'Bebock', email: 'test3@mail.com', password: '123456')
user4 = User.create!(first_name: 'Demo', last_name: 'User', email: 'demouser@mail.com', password: 'demouser')