# == Schema Information
#
# Table name: user_follows
#
#  id          :bigint(8)        not null, primary key
#  follower_id :integer          not null
#  followee_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class UserFollow < ApplicationRecord

  belongs_to :follower, # person doing action of following other, second subject
    foreign_key: :follower_id,
    class_name: :User

  belongs_to :followee, # person who is being followed, main subject
    foreign_key: :followee_id,
    class_name: :User

end
