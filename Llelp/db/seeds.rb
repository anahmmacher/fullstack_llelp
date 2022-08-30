# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



User.destroy_all
Business.destroy_all


user1 = User.create!(first_name: 'John', last_name: 'Doe', email: 'test1@mail.com', password: '123456')
user2 = User.create!(first_name: 'Jane', last_name: 'Doe', email: 'test2@mail.com', password: '123456')
user3 = User.create!(first_name: 'Al', last_name: 'Bebock', email: 'test3@mail.com', password: '123456')
user4 = User.create!(first_name: 'Demo', last_name: 'User', email: 'demouser@mail.com', password: 'demouser')


business1 = Business.create!(name: 'Dough Zone Dumpling House San Jose', address: '1701 Lundy Ave #100', category: 'chinese', lat: 37.3875134070033, lng:-121.88732370274721, city: 'San Jose', state: 'CA', zip_code: '95131', website: 'https://www.doughzonedumplinghouse.com/', phone_number: '+14084183673', open: '11:00AM', close: '9:00PM', price: '$$' )
business2 = Business.create!(name: 'Baja Fresh', address: '1708 Old Oakland Rd Ste 100', category: 'mexican', lat: 37.38370020352938, lng: -121.89374821004556, city: 'San Jose', state: 'CA', zip_code: '95131', website: 'https://www.bajafresh.com/', phone_number: '+14084365000', open: '9:00AM', close: '9:00PM', price:'$')
business3 = Business.create!(name: 'Jade China Restaurant', address: '2524 Berryessa Rd', category: 'chinese', lat: 37.387531115091626, lng: -121.8581258321435, city: 'San Jose', state: 'CA', zip_code: '95132', website: 'https://www.jadechinarestaurant.com/', phone_number: '+14089236288', open: '11:00AM', close: '9:00PM', price: '$')
# business4 = Business.create!()
# business5 = Business.create!()
# business6 = Business.create!()
# business7 = Business.create!()
# business8 = Business.create!()
# business9 = Business.create!()
# business10 = Business.create!()
# business11 = Business.create!()
# business12 = Business.create!()
# business13 = Business.create!()
# business14 = Business.create!()
# business15 = Business.create!()
# business16 = Business.create!()
# business17 = Business.create!()
# business18 = Business.create!()
# business19 = Business.create!()
# business20 = Business.create!()
# business21 = Business.create!()
# business22 = Business.create!()
# business23 = Business.create!()
# business24 = Business.create!()
# business25 = Business.create!()
# business26 = Business.create!()
# business27 = Business.create!()
# business28 = Business.create!()
# business29 = Business.create!()
# business30 = Business.create!()
