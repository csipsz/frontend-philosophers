class Philosopher < ApplicationRecord
  belongs_to :branch
  has_many :notes
end
