<template>
    <div>
      <div>
        <template>
          <van-nav-bar fixed title="我的" />
        </template>
      </div>
      <div class="list-item">
        <div class="message" @click="mine()" v-if="flag">
          <div>
            <p><span>李四 {{$store.state.count}}</span><van-rate v-model="star" /></p>
            <p><span>130-4537-6553</span></p>
          </div>

          <div>
            <van-image width="54" height="54" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
            <div class="iconfont" style="color: #999;">&#xe63a;</div>
          </div>
        </div>
       <!-- <div>
          <van-cell title="立即登录" is-link to="/login"/>
        </div>-->
      </div>
      <div class="list-cell" style="margin-top: 0.45rem">
        <van-cell title="我的订单" is-link url="" />
        <van-cell title="我的钱包" is-link to="/wallet"/>
        <van-cell title="联系客服" is-link url="" />
        <van-cell title="设置" is-link to="/setting" style="margin-top: 0.45rem "/>
        <van-cell title="退出" is-link @click="logout()"/>
      </div>
      <div>
          <template>
              <van-tabbar fixed v-model="active" class="footer-item">
                  <van-tabbar-item name='home' icon="home-o" to="/home">首页</van-tabbar-item>
                  <van-tabbar-item name='task' icon="completed" dot to="/recommend">任务</van-tabbar-item>
                  <van-tabbar-item name='messages' icon="chat-o" info="5" to="messages">消息</van-tabbar-item>
                  <van-tabbar-item name='order' icon="records" dot to="/order">订单</van-tabbar-item>
                  <van-tabbar-item name='me' icon="contact" to="my">我的</van-tabbar-item>
              </van-tabbar>
          </template>
      </div>
    </div>
</template>

<script>
  import { Toast } from 'vant';
  import { mapGetters } from 'vuex'
    export default {
      name: "my",
      data(){
        return{
          active: 'me',
          star: 3,
          dataPerson: '',
          flag:true,
          isLogin:true
        }
      },
      computed: {
        ...mapGetters([
          'name'
        ])
      },
      methods:{
        mine(){
          this.$router.push({name:'PersonalData'})
        },
        logout() {
          this.$store.dispatch('LogOut').then(() => {
            debugger;
            location.reload()// In order to re-instantiate the vue-router object to avoid bugs
          })

        }
      }
    }
</script>

<style lang="less" scoped>
  .list-item{
    margin-top: 2rem;
    .message{
      padding: 0.45rem;
      background: #ffffff;
      display: flex;
      justify-content:space-between;
      p{
        padding: 0;
        margin: 0;
        font-size: 0.45rem;
      }
      &>div p:first-child{
        display: flex;
        &>span{
          padding:0 15px 10px 0;
          font-size: 0.48rem;
        }
      }
      &>div:last-child {
        display: flex;
        &> div.iconfont{
          display: flex;
          align-items: center;
          font-size: 0.81rem;
        }
      }
      /deep/ .van-image__img{
        border-radius: 100%;
      }
    }
  }

</style>
<!--
<template>
  <div>

    <li><router-link to="/login" v-show="isLogin">{{$store.state.current}}</router-link></li>

    <li><router-link to="/" v-show="isLogin">[退出]</router-link></li>

    <li><router-link to="/login" v-show="!isLogin">登陆</router-link></li>

    <li class="dropdown" v-show="!isLogin">

       <router-link to="/sign" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">注册</router-link>

    </li>
  </div>

</template>

<script>
  export default {
    data(){
      return{
        isLogin:false
      }
    }

  }

</script>
-->
