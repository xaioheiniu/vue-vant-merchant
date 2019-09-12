<template>
  <div>
      <van-row gutter="20" class="row-1">
        <van-nav-bar :fixed="true" :border="false" title="订单" @click-right="onClickRight">
          <van-icon name="search" slot="right" to="/about"  />
        </van-nav-bar>
      </van-row>
      <div style='margin-top:1.6rem' class="item-title">
        <van-tabs type="line" v-model="active" animated font-size="0.5rem" background="#6998e8" color="#fff" title-inactive-color="#fff" title-active-color="#fac030">
            <van-tab  v-for="(item,index) in navArr" :title="item.name" :key="index">
              <div class="list-item" id="list-item">
                <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                <template>
                  <van-cell-group>
                    <van-cell title="订单号：1234567890" value="详情"  @click="detail()"/>
                  </van-cell-group>
                 <!-- <order-item></order-item>-->
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
          <van-tabbar fixed v-model="activeTab" class="footer-item">
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
          activeTab: 'order',
          active:'',
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
    .van-col--16{
      display: flex;
      padding:0.61rem 0;
      align-items: center;
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
  .van-tabs__content--animated{
    overflow: inherit;
  }
  .van-pull-refresh{
    overflow: inherit;
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
  /*border-top: 1px solid #f1f4f8*/
</style>


<!--
<template>
  <div>
    <van-row gutter="20" class="row-1">
      <van-nav-bar :fixed="true" :border="false" title="订单" @click-right="onClickRight">
        <van-icon name="search" slot="right" to="/about"  />
      </van-nav-bar>
    </van-row>
    <div style='margin-top:1.6rem' class="item-title">
      <van-tabs type="line" v-model="active" animated font-size="0.5rem" background="#6998e8" color="#fff" title-inactive-color="#fff" title-active-color="#fac030">
        <van-tab  v-for="(item,index) in navArr" :title="item.name" :key="index">
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
      <van-tabbar fixed v-model="activeTab" class="footer-item">
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
  export default{
    data(){
      return{
        activeTab:'order'
      }
    },
    methods:{
      onClickRight(){
        this.$router.push({name:'Search'})
      }
    }
  }
</script>
<style lang="less">

</style>
-->
