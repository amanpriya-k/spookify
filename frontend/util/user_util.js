

export const refetchUserInfo = (id) => (
  $.ajax({
    url: `/api/users/${id}`,
    method: 'GET'
  })
)

export const unfollow = (currentUserId, otherUserId) => (
  $.ajax({
    url: `/api/users/${currentUserId}/unfollow`,
    method: 'DELETE',
    data: { other_user_id: otherUserId }
  })
)

export const follow = (currentUserId, otherUserId) => (
  $.ajax({
    url: `/api/users/${currentUserId}/follow`,
    method: 'POST',
    data: { other_user_id: otherUserId }
  })
)

export const searchUsers = (search_term) => (
  $.ajax({
    url: `/api/users/search`,
    method: 'GET',
    data: { search_term: search_term }
  })
)
