

export const refetchUserInfo = (id) => (
  $.ajax({
    url: `/api/users/${id}`,
    method: 'GET'
  })
)
