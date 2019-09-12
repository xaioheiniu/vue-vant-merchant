<!--
<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" @load="onLoad">
        &lt;!&ndash; 加载的内容&ndash;&gt;
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        deviceList: [],//用于存放加载的数据
        totalPage: 0,
        pageNumber: 0,
        loading: false,//控制上拉加载的加载动画
        finished: false,//控制在页面往下移动到底部时是否调用接口获取数据
        isLoading: false,//控制下拉刷新的加载动画
      };
    },
    created() {

    },
    methods: {
      init() {
        let data = {
          pageNumber: this.pageNumber + 1
        };
        let self = this;
        this.$.Post("/project/deviceShow", data, re => {
          self.deviceList = re.info.list;
          self.totalPage = re.info.totalPage;
          self.isLoading = false; //关闭下拉刷新效果
        });
      },
      //下拉刷新
      onRefresh() {
        let self = this;
        setTimeout(() => {
          self.totalPage = 0;
          self.pageNumber = 0;
          self.init(); //加载数据
        }, 500);
      },
      //页面初始化之后会触发一次，在页面往下加载的过程中会多次调用【上拉加载】
      onLoad() {
        let self = this;
        setTimeout(() => {
          let data = {
            pageNumber: self.pageNumber + 1
          };
          self.$.Get("/project/deviceShow", data, re => {
            self.totalPage = re.info.totalPage;
            self.deviceList = self.deviceList.concat(re.info.list);
            self.loading = false;
            self.pageNumber++;
            if (self.pageNumber >= self.totalPage) {
              self.finished = true;
            }
          });
        }, 500);
      }
    }
  };
</script>
-->

<!--
//order.vue
<template>
  <div>
    <van-row gutter="20" class="row-1">
      <van-nav-bar :fixed="true" :border="false" title="订单" @click-right="onClickRight">
        <van-icon name="search" slot="right" to="/about"  />
      </van-nav-bar>
    </van-row>
    <div style='margin-top:1.6rem' class="item-title">
      <van-tabs type="line" v-model="active" animated font-size="0.5rem" background="#6998e8" color="#fff" title-inactive-color="#fff" title-active-color="#fac030">
        <van-tab  v-model="active" v-for="(item,index) in navArr" :title="item.name" :key="index">
          <div class="list-item" id="list-item">
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
              <template>
                <van-cell-group>
                  <van-cell title="订单号：1234567890" value="详情" />
                </van-cell-group>
                <order-item></order-item>
                <van-cell-group class="item-Btn">
                  <van-button type="default" size="small">取消订单</van-button>
                  <van-button type="danger" size="small" to="/history">查看物流</van-button>
                  <van-button type="primary" size="small" to="/allot">重新配送</van-button>
                  <van-button type="primary" size="small">等待确定</van-button>
                </van-cell-group>
              </template>
            </van-pull-refresh>
          </div>
        </van-tab>
      </van-tabs>
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
  import OrderItem from "../components/orderItem";
  export default {
    name: "order",
    components: {OrderItem},
    data(){
      return{
        isLoading: false,//下拉刷新
        active: 'order',
        navArr:[
          {
            name:"  全部",
            orderName:'12345623456',
          },
          {
            name:"  待确定",
            orderName:'12345623456',
          },
          {
            name:"进行中",
            orderName:'22222222222222',
          },
          {
            name:"已完成",
            orderName:'3333333333',
          }
        ]
      }
    },
    methods:{
      onRefresh() {
        setTimeout(() => {
          this.$toast('刷新成功');
          this.isLoading = false;
          this.count++;
        }, 500);
      },
      detail(){
        this.$router.push({
          name:'OrderDetail',
        })
      },
      history(){
        this.$router.push({
          name:'History',
        })
      },
      receipt(){
        this.$router.push({name:'UpReceipt'})
      },
      Abnormal(){
        this.$router.push({name:'UpAbnormal'})
      },
      onClickRight(){
        this.$router.push({name:'Search'})
      }
    },

  }
</script>

<style lang="less">
  /deep/.van-tab{
    font-size:0.405rem!important;
  }
  .van-nav-bar .van-icon{
    color:#fff;
    font-size:0.45rem;
    margin-bottom: 10px;
  }
  .list-item{
    margin:0.405rem 0 0 0;
    .van-col&#45;&#45;16{
      display: flex;
      padding:0.61rem 0;
      div{
        flex: 1;
        text-align: center;
        span{
          font-size: 0.45rem;
        }
      }
      .iconfont{
        font-size: 1rem;
      }
    }
    .van-row{background: #fff}
    .star span:first-child, .end span:first-child{
      display: inline-block;
      border-radius: 100%;
      width: 0.58rem;
      height: 0.58rem;
      margin-right:0.15rem;
      font-size: 0.32rem;
      &:after{
        line-height: 0.58rem;
        font-weight: 800;
        color: #fff;
      }
    }
    .star span:first-child{
      background: #6998e8;
      &:after{
        content: "发";
      }
    }
    .end span:first-child{
      background: #fac030;
      &:after{
        content: "终";
      }
    }
    .freight >div{
      display: flex;
      justify-content: space-between;
    }
    .item-time{
      margin: 0.45rem;
      &>span{
        display: block;
        margin-bottom: 5px;
        font-size: 0.45rem;
      }
      &>span:first-child{
        color: #6998e8;
        span{
          color: #333;
          padding-left: 10px;
        }
      }
    }
  }
  .item{
    padding-top: 0.45rem!important;
    padding-right: 0.10rem!important;
    border-top: 1px solid #ebedf0;
    border-bottom: 1px solid #ebedf0;
  }
  .item-Btn{
    padding: 0.32rem;
    display: flex;
    justify-content: flex-end;
    button{
      margin-left:5px;
    }
  }
  .van-tabs__content&#45;&#45;animated{
    overflow: inherit;
  }
  .van-pull-refresh{
    overflow: inherit;
  }
</style>

-->

<template>
  <div id="search_carseries">
    <div class="search_carseries_wrap">
      <div class="search">
        <div class="search_input">
          <input type="text" v-model="searchval" @input="autosearch()"/>
          <div class="search_icon">
            <img :src="searchicon"/>
          </div>
        </div>
      </div>
      <div class="search_carseries_inner"></div>
      <div class="carseries_list_wrap">
        <div class="carseries_list" v-for="(item,index) in oldlist" :key="index" >
          <input type="radio" :id="item.radio" :value="item.value"  name="seriescar">
          <label :for="item.radio" @click="Selected(item.value)"><span>{{item.value}}</span></label>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import searchicon from "../assets/logo.png";
  export default {
    data(){
      return{
        searchicon:searchicon,
        carseriesList:[],//获取的车型车系数据
        searchval:"",//输入框输入的值
        newlist:[
          {value:"张孟真",radio:"a1"},
          {value:"车系名称2",radio:"a2"},
          {value:"杨磊",radio:"a3"},
          {value:"张平",radio:"a4"},
          {value:"邱敏",radio:"a5"},
          {value:"陈强",radio:"a6"},
        ] ,
        oldlist:[{value:"张孟真",radio:"a1"},
          {value:"车系名称2",radio:"a2"},
          {value:"杨磊",radio:"a3"},
          {value:"张平",radio:"a4"},
          {value:"邱敏",radio:"a5"},
          {value:"陈强",radio:"a6"}
        ]
      }
    },/*
    created(){
      //获取的车型车系数据
      this.getCarSeries();
    },*/
    methods:{
      autosearch(){
        this.oldlist=[];
        //字符串方法indexOf
        for(let i=0;i<this.newlist.length;i++){
          //如果字符串中不包含目标字符会返回-1
          if(this.newlist[i].value.indexOf(this.searchval)>=0){
            this.oldlist.push(this.newlist[i]);
          }
        }
        return this.oldlist;
      },
      /*getCarSeries(){
        getCarList({isAfterSale:true}).then(res=>{
          console.log(res.data)
        })
      },*/
      Selected(val){
        console.log('2被选中的值为'+val);
        Cookies.set('carSeries', val);
      },
    }
  }
</script>
