export function getObj(id) {
  return fetch({
    url: '/api/admin/user/front/menus',
    method: 'get'
  })
}
