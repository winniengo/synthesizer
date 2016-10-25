class Track < ApplicationRecord
  validates :name, :roll, :time_start, presence: true
end
