<template>
    <div class="container">
        <van-nav-bar :fixed="true" :border="false" title="首页" ></van-nav-bar>
        <template>
            <van-swipe :autoplay="3000" indicator-color="white" class="swipe-img" style="margin-top:1.6rem">
                <van-swipe-item><img src="../../static/images/banner_02.jpg"/> </van-swipe-item>
                <van-swipe-item><img src="../../static/images/banner_02.jpg"/> </van-swipe-item>
                <van-swipe-item><img src="../../static/images/banner_02.jpg"/> </van-swipe-item>
            </van-swipe>
        </template>

        <van-row style="color: green;">
          <van-col span="24"><span class="iconfont">&#xe62c; 进行中</span><span>20</span></van-col>
        </van-row>
        <van-row style="color: red;">
          <van-col span="24"><span class="iconfont">&#xe60c; 已完成</span><span>20</span></van-col>
        </van-row>
        <van-cell title="附近货源" />
        <div class="homeItem">
          <van-col span="6"><van-image width='2.3rem' height="2.3rem" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg"/></van-col>
          <van-col span="18">
            <div class="homeTit">
              <p><span>宜家运输</span><span>普货</span></p>
              <p><span>驾龄6年以上</span></p>
              <p><span>卡车：13米*12米*10米</span><van-button size='small' type="info">抢单</van-button></p>
              <!--<p v-for="orderItem in orderItem"><span>{{orderItem.name}}</span><span>{{orderItem.orderL}}</span></p>-->
            </div>
          </van-col>
        </div>
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
</template>

<script>
  export default {
    name: "home",
    data(){
        return{
            active: 'home',
            list:[
              {orderL:'普货', name:'运输商家品牌'},
              {orderL:'', name:'驾驶6年以上'},
            ],
            list1:[
              {orderL:'支付', name:'卡车：13米*12米*10米'},
            ],
        }
    },
  }
</script>
<style lang="less">
  .container{
       .swipe-img img{
          width: 100%;
          display: block;
       }
      .van-row{
          padding: 15px;
          margin: 15px 0;
          background: #fff;
          .van-col{
              display: flex;
            justify-content:space-between;
          }
      }
      .homeItem{
        display: flex;
        background: #fff;
        padding:15px;
        font-size: 12px;
        align-items: center;
        .homeTit p{
          display: flex;
          justify-content: space-between;
          margin: 0;
          padding: 0 0 10px 15px;
          &:last-child{
            padding-bottom: 0;
          }
        }
      }
  }
</style>
