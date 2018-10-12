# == Schema Information
#
# Table name: follows
#
#  id              :bigint(8)        not null, primary key
#  user_id         :integer
#  followable_id   :bigint(8)
#  followable_type :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Follow < ApplicationRecord
  belongs_to :followable, polymorphic: true
end
