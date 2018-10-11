class Save < ApplicationRecord
  belongs_to :saveable, polymorphic: true
end
