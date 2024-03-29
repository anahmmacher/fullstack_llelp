# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_08_29_221648) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "businesses", force: :cascade do |t|
    t.string "name", null: false
    t.string "address", null: false
    t.string "city", null: false
    t.string "zip_code", null: false
    t.string "phone_number", null: false
    t.string "website"
    t.datetime "open", null: false
    t.datetime "close", null: false
    t.string "category", null: false
    t.string "price", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.decimal "lat", null: false
    t.decimal "lng", null: false
    t.text "state", null: false
    t.index ["address"], name: "index_businesses_on_address", unique: true
    t.index ["city"], name: "index_businesses_on_city"
    t.index ["name"], name: "index_businesses_on_name"
    t.index ["zip_code"], name: "index_businesses_on_zip_code"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.string "session_token", null: false
    t.string "password_digest", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
