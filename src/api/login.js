import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  };
  return request({
    url: '/api/auth/login',
    method: 'post',
    data
  })
}

export function logout(token) {
  return request({
    // url: '/auth/logout',
    url: '/api/auth/logout',
    method: 'post',
    params: { token }
  })
}

export function getUserInfo(user) {
  return request({
    // url: '/auth/info',
    url: '/api/services/eziclouduaa/api/authorities/permission/user/' + user,
    // url: '/api/admin/user/front/info',
    method: 'get'
  })
}

export function getMenus(token) {
  return fetch({
    url: '/api/admin/user/front/menus',
    method: 'get',
    params: { token }
  });
}

export function getAllMenus() {
  return fetch({
    url: '/api/admin/user/front/menu/all',
    method: 'get'
  });
}
