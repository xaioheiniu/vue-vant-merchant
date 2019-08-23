import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import OrderItem from '@/components/orderItem'
import Home from '@/page/home'
import Recommend from '@/page/recommend'
import Steps from '@/page/steps'
import Order from '@/page/order'
import Messages from '@/page/messages'
import My from '@/page/my'
import About from  '@/page/about'
import OrderDetail from  '@/page/orderdetail'
import History from  '@/page/history'
import SearchOrder from  '@/page/searchOrder'
import UpReceipt from  '@/page/UpReceipt'
import DetailOrder from  '@/page/detailOrder'
import Setting from  '@/page/setting'
import PersonalData from  '@/page/personalData'
import Password from  '@/page/password'
import Wallet from  '@/page/wallet'
import Search from  '@/page/search'
import Login from  '@/page/login'
import FindBack from  '@/page/findBack'
import Allot from  '@/page/allot'
import CarDetail from  '@/page/carDetail'


Vue.use(Router)

const router = new Router({

  routes: [
    { path: '/', name: 'login', component: Login ,meta:{index:0,keepAlive: true }},
    { path: '/orderItem', name: 'OrderItem', component: OrderItem },
    { path:'/home', name:'Home', component:Home,
      /*children: [
        {
          path: 'detailOrder',
          name: 'detailOrder',
          component: () => import('@/page/detailOrder'),
        }
      ],*/
      children: [
        {
          path: 'detailOrder',
          name: 'detailOrder',
          component: DetailOrder
        },
      ]
    },
    { path:'/recommend', name:'Recommend', component:Recommend,meta:{index:0,keepAlive: true } },
    { path:'/messages', name:'Messages', component:Messages,meta:{index:0,keepAlive: true } },
    { path:'/my', name:'My', component:My,meta:{index:0,keepAlive: true } },
    { path:'/order', name:'Order', component:Order,meta:{index:0,keepAlive: true }},
    { path:'/steps', name:'Steps', component:Steps,meta:{index:0,keepAlive: true } },
    { path:'/about', name:'About', component:About,meta:{index:0,keepAlive: true } },
    { path:'/orderdetail', name:'OrderDetail', component:OrderDetail,meta:{index:0,keepAlive: true }},
    { path:'/history', name:'History', component:History,meta:{index:0,keepAlive: true }},
    { path:'/searchOrder:id', name:'SearchOrder', component:SearchOrder,meta:{index:0,keepAlive: true }},
    { path:'/upReceipt', name:'UpReceipt', component:UpReceipt,meta:{index:0,keepAlive: true }},
    /*{ path:'/detailorder', name:'DetailOrder', component:DetailOrder,meta:{index:0,keepAlive: true }},*/
    { path:'/setting', name:'Setting', component:Setting,meta:{index:0,keepAlive: true }},
    { path:'/personalData', name:'PersonalData', component:PersonalData,meta:{index:0,keepAlive: true }},
    { path:'/password', name:'Password', component:Password,meta:{index:0,keepAlive: true }},
    { path:'/wallet', name:'Wallet', component:Wallet,meta:{index:0,keepAlive: true }},
    { path:'/search', name:'Search', component:Search,meta:{index:0,keepAlive: true }},
    { path:'/login', name:'Login', component:Login,meta:{index:0,keepAlive: true }},
    { path:'/findBack', name:'FindBack', component:FindBack,meta:{index:0,keepAlive: true }},
    { path:'/allot', name:'Allot', component:Allot,meta:{index:0,keepAlive: true }},
    { path:'/carDetail', name:'CarDetail', component:CarDetail,meta:{index:0,keepAlive: true }}
  ]
})


// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('Authorization');

    if (token === 'null' || token === '') {
      next('/login');
    } else {
      next();
    }
  }
});


export default router;
