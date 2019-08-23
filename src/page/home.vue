<template>
  <div>
    <template>
      <!--<van-nav-bar :fixed="true" :border="false" title="首页" right-text="提交" @click-right="onClickRight">
        <van-icon name="arrow-left" slot="left" @click="upBack()" />
      </van-nav-bar>-->
      <div class="van-nav-bar van-nav-bar--fixed" style="z-index: 1">
          <div class="van-nav-bar__left" @click="show"><span class="iconfont">&#xe60d; </span>{{city}}</div><!--<input class="input" v-model="city" @click="show"/>-->
          <div class="van-nav-bar__title van-ellipsis">首页 </div>
          <div class="van-nav-bar__right"></div>
      </div>
      <van-popup v-model="flag" position="bottom">
        <van-area :area-list="areaList"  @confirm="onAddrConfirm" @cancel="shut" :value="addrCode"/>
      </van-popup>
    </template>
    <template>
      <van-swipe :autoplay="3000" indicator-color="white" class="swipe-img" style="margin-top:1.6rem">
        <van-swipe-item><img src="../../static/images/banner_02.jpg"/> </van-swipe-item>
        <van-swipe-item><img src="../../static/images/banner_02.jpg"/> </van-swipe-item>
        <van-swipe-item><img src="../../static/images/banner_02.jpg"/> </van-swipe-item>
      </van-swipe>
    </template>
    <van-row class="side-padding side-margin count" >
      <!--<van-col span="8"><div><span class="iconfont">&#xe65c;</span></div><div><span>全部</span></div></van-col>
      <van-col span="8"><div><span class="iconfont">&#xe65c;</span></div><div><span>普货</span></div></van-col>
      <van-col span="8"><div><span class="iconfont">&#xe65c;</span></div><div><span>罐车</span></div></van-col>
      <van-col span="8"><div><span class="iconfont">&#xe65c;</span></div><div><span>危险品</span></div></van-col>
      <van-col span="8"><div><span class="iconfont">&#xe65c;</span></div><div><span>大卡</span></div></van-col>
      <van-col span="8"><div><span class="iconfont">&#xe65c;</span></div><div><span>厢货</span></div></van-col>-->
      <van-col span="8" v-for="(titleItem,key) in titleItem" :key="key">
        <router-link :to="'/detailOrder/'+key">
          <div><span class="iconfont">&#xe65c</span></div>
          <div><span>{{titleItem.title}}</span></div>
        </router-link>
      </van-col>
    </van-row>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" @load="onLoad">
        <div style="margin-bottom:60px">
            <!--<order-item></order-item>-->
            <div class="homeItem">
              <van-col span="6"><van-image width='2.3rem' height="2.3rem" fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg"/></van-col>
              <van-col span="18">
                  <div class="homeTit">
                    <p><span>宜家运输</span><span>普货</span></p>
                    <p><span>驾龄6年以上</span></p>
                    <p><span>卡车：13米*12米*10米</span><van-button size='small' type="info">任务分配</van-button></p>
                    <!--<p v-for="orderItem in orderItem"><span>{{orderItem.orderName}}</span><span>{{orderItem.orderType}}</span></p>-->
                  </div>
              </van-col>
            </div>
        </div>
      </van-list>
    </van-pull-refresh>
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
    /*import BMap from 'BMap'*/
    import areaList from "../area/demo/area";
    import OrderItem from "../components/orderItem";
    import {
      getObj
    } from '@/api/home/home';
    export default {
      name: "home",
      components: {OrderItem},
      data() {
        return {
          areaList,
          listData:'',
          active: 'home',
          city:'正在定位',
          flag:false,
          addrCode: '440105',
          members:undefined,
          isLoading: false, //控制下拉刷新的加载动画
          finished: false,//控制在页面往下移动到底部时是否调用接口获取数据
          loading: false,//控制上拉加载的加载动画
          titleItem:[
            {icon:'&#xe65c;',title:'全部',},
            {icon:'&#xe65c;',title:'普货'},
            {icon:'&#xe65c;',title:'罐车'},
            {icon:'&#xe65c;',title:'危险品'},
            {icon:'&#xe65c;',title:'大卡'},
            {icon:'&#xe65c;',title:'厢货'},
          ],
         /* orderItem:[
            {orderName:'宜家家具装饰公司',orderType:'普货'},
            {orderName:'驾龄6年以上',orderType:''},
            {orderName:'卡车：13米*12米*10米',orderType:''},

            ]*/
        }
      },
      created(){
        getObj(this.id)
          .then(response => {
            console.log(JSON.stringify(response)+'-------1')
          });
      },
      methods: {
        onRefresh() {
          setTimeout(() => {
            this.$toast('刷新成功');
            this.isLoading = false;
            this.count++;
          }, 500);
        },

        onLoad() {
          let self = this;
          setTimeout(() => {
            let data = {
              pageNumber: self.pageNumber + 1
            };
            /*self.$.Get("/project/deviceShow", data, re => {
              self.totalPage = re.info.totalPage;
              self.deviceList = self.deviceList.concat(re.info.list);
              self.loading = false;
              self.pageNumber++;
              if (self.pageNumber >= self.totalPage) {
                self.finished = true;
              }
            });*/
          }, 500);
        },










        onAddrConfirm (e) { // 点击确认，获取所选的省市区数据
          // 确定选择,返回的必定是三元素数组
          console.log('this.onAddrConfirm=>e', e)
          this.province = e[0].name
          this.city = e[1].name
          this.district = e[2].name
          this.flag = false
        },
        shut () {
          this.flag = false
        },
        show () {
          this.flag = true
        },
      }
    }
</script>

<style lang="less" scoped>
  .van-nav-bar__left{
    color: #fff;
  }
  .swipe-img img{
    width: 100%;
    display: block;
  }
  .count{
    background: #fff;
    padding:0.401rem;
    margin: 0.401rem 0;
  }
  .count .van-col--8 div:first-child{
      display: block;
      border-radius:100%;
      width:1.054rem;
      height:1.054rem;
      margin: 0 auto;
      font-size: 0.32rem;
      background-image: linear-gradient(160deg, #c4b3fb 20%,#b4a3ec 80%);
      span{
        display: block;
        color: #fff;
        font-size:0.51rem;
        text-align: center;
        line-height: 1.11rem;
      }
  }
  .count .van-col--8 div:last-child span{
    color:#333;
  }
  .count .van-col--8:nth-child(2) div:first-child{
    background-image: linear-gradient(160deg, #82e9d5 20%,#6ad6cb 80%);
  }
  .count .van-col--8:nth-child(3) div:first-child{
    background-image: linear-gradient(160deg, #fbc1aa 20%,#fca477 80%);
  }
  .count .van-col--8:nth-child(4) div:first-child{
    background-image: linear-gradient(160deg, #fcd845 20%,#f3ac38 80%);
  }
  .count .van-col--8:nth-child(5) div:first-child{
    background-image: linear-gradient(160deg, #f9a2bc 20%,#fb878a 80%);
  }
  .count .van-col--8:nth-child(6) div:first-child{
    background-image: linear-gradient(160deg, #78d5f8 20%,#4aacf9 80%);
  }
  .count .van-col--8 div{
    display: block;
    height:1.054rem;
    text-align: center;
    font-size: 0.32rem;
    span{
      display: block;
      text-align: center;
      margin-top: 5px;
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

</style>
