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

ActiveRecord::Schema.define(version: 2018_09_19_144216) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.integer "spot_id", null: false
    t.integer "user_id", null: false
    t.datetime "check_in", null: false
    t.datetime "check_out", null: false
    t.integer "guest"
    t.index ["spot_id"], name: "index_bookings_on_spot_id"
    t.index ["user_id"], name: "index_bookings_on_user_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.string "review", null: false
    t.integer "rating", null: false
    t.integer "user_id", null: false
    t.integer "spot_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["spot_id"], name: "index_reviews_on_spot_id"
  end

  create_table "reviews_tables", force: :cascade do |t|
  end

  create_table "spots", force: :cascade do |t|
    t.string "title", null: false
    t.text "details", null: false
    t.string "spot_type"
    t.string "location"
    t.integer "cost"
    t.integer "guest"
    t.string "img_url"
    t.integer "bedrooms"
    t.integer "beds"
    t.integer "bath"
    t.integer "booking_id"
    t.integer "review_id"
    t.integer "host_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "lat", null: false
    t.float "lng", null: false
    t.index ["title"], name: "index_spots_on_title", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "img_url"
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.integer "booking_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
