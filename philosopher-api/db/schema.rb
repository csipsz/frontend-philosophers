# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_09_12_150117) do

  create_table "branches", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "notes", force: :cascade do |t|
    t.text "content"
    t.integer "philosopher_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["philosopher_id"], name: "index_notes_on_philosopher_id"
  end

  create_table "philosophers", force: :cascade do |t|
    t.string "name"
    t.string "nationality"
    t.date "birthdate"
    t.text "work"
    t.integer "branch_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["branch_id"], name: "index_philosophers_on_branch_id"
  end

  add_foreign_key "notes", "philosophers"
  add_foreign_key "philosophers", "branches"
end
