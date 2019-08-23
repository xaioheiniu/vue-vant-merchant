import { loginByUsername, logout, getUserInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    user: '',
    status: '',
    code: '',
    token: getToken(),
    name: '',
    loginName: '',
    setting: {
      articlePlatform: []
    }
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_LOGINNAME: (state, username) => {
      state.loginName = username
    },
  },

  actions: {
    // 用户名登录
    LoginByUsername({ commit }, userInfo) {
      console.log('-----------11-----' + JSON.stringify(userInfo))
      commit('SET_NAME', userInfo.username);
      commit('SET_LOGINNAME', userInfo.username);
      commit('SET_TOKEN', '');
      removeToken();
      return new Promise((resolve, reject) => {
          setTimeout(() => {
        loginByUsername(userInfo.username, userInfo.password).then(response => {
          setToken(response.data.data);
          commit('SET_TOKEN', response.data.data);
          resolve()
        }).catch(error => {
          reject(error)
        })
       })
      })
    },

    // 获取用户信息
    GetUserInfo({
                  commit
                }) {
      return new Promise((resolve, reject) => {

        const name = sessionStorage.getItem('loginName');
        getUserInfo(name).then(response => {
          commit('SET_AVATAR', 'http://git.oschina.net/uploads/42/547642_geek_qi.png?1499487420');
          commit('SET_INTRODUCTION', response.data.description);
          const menus = {};
          const elements = {};
          for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].type !== 'button') {
              menus[response.data[i].code] = true;
            } else {
              elements[response.data[i].code] = true;
            }
          }
          commit('SET_MENUS', menus);
          commit('SET_ELEMENTS', elements);
          resolve(response.data);
        }).catch(error => {
          reject(error);
        });
        /* getMenus(state.token).then(response => {
          commit('SET_PERMISSION_MENUS', response);
        });*/
        commit('SET_PERMISSION_MENUS', null);
      });
    },
    // 第三方验证登录
    // LoginByThirdparty({ commit, state }, code) {
    //   return new Promise((resolve, reject) => {
    //     commit('SET_CODE', code)
    //     loginByThirdparty(state.status, state.email, state.code).then(response => {
    //       commit('SET_TOKEN', response.data.token)
    //       setToken(response.data.token)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '');
          commit('SET_ROLES', []);
          commit('SET_MENUS', undefined);
          commit('SET_ELEMENTS', undefined);
          commit('SET_PERMISSION_MENUS', undefined);
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_MENUS', undefined);
        commit('SET_ELEMENTS', undefined);
        commit('SET_PERMISSION_MENUS', undefined);
        removeToken()
        resolve()
      })
    },

    // 动态修改权限
    ChangeRoles({ commit, dispatch }, role) {
      return new Promise(resolve => {
        commit('SET_TOKEN', role)
        setToken(role)
        getUserInfo(role).then(response => {
          const data = response.data
          commit('SET_ROLES', data.roles)
          commit('SET_PERMS', data.perms)
          commit('SET_AVATAR', data.avatar)
          commit('SET_INTRODUCTION', data.introduction)
          dispatch('GenerateRoutes', data) // 动态修改权限后 重绘侧边菜单
          resolve()
        })
      })
    }
  }
}

export default user
