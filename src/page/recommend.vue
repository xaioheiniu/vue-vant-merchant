<template>
  <div>
      <div>
          <template>
              <van-nav-bar fixed title="任务" />
          </template>
      </div>
      <div style="margin-top: 1.6rem" class="item-title" >
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <order-item @click="detail()"></order-item>
        </van-pull-refresh>
          <!--<van-tabs type="line" v-model="active" animated font-size="0.5rem" background="#6998e8" color="#fff" title-inactive-color="#fff" title-active-color="#fac030">
            <van-tab v-model="active" v-for="(item,index) in navArr" :title="item.name" :key="index">
              <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                <div class="list-item">
                    <template>
                      <van-cell icon="location-o" is-link value="已拒绝" >
                        <template slot="title">
                          <span>订单号：</span>
                          <span>23456789</span>
                        </template>
                      </van-cell>
                      <van-row type="flex" justify="center">
                        <van-col span="16">
                          <div class="star">
                            <span></span><span>北京市</span>
                          </div>
                          <span class="iconfont">&#xe700;</span>
                          <div class="end">
                            <span></span>
                            <span>南京市</span>
                          </div>
                        </van-col>
                      </van-row>
                      <van-cell value="内容" class="freight">
                        <template slot="title">
                          <span class="custom-title">运费:</span>
                          <span class="custom-title">￥579</span>
                        </template>
                        <van-tag plain type="primary" >联系客户</van-tag>
                        <van-tag plain  type="danger">取消任务</van-tag>
                      </van-cell>
                    </template>
                  </div>
              </van-pull-refresh>
              </van-tab>
          </van-tabs>-->
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
    import OrderItem from "../components/orderItem";
    export default {
        name: "recommend",
      components: {OrderItem},
      data(){
          return{
            isLoading: false,//下拉刷新
            active: 'task',
            navArr:[
              {
                name:"  全部"
              },
              {
                name:"已接收"
              },
              {
                name:"已完成"
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
      }
    }
</script>

<style lang="less" scoped>
  /deep/.van-tab{
   font-size:0.405rem!important;
 }
  .list-item{
    margin:0.405rem 0 0 0;
    background: #fff;
    .van-col--16{
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
    .freight div:first-child span:last-child{
      color:#fac030;
      font-size: 0.72rem;
      line-height: 43px;
    }
    .freight div:last-child span{
      width: 1.62rem;
      height: 0.81rem;
      line-height: 0.81rem;
      text-align: center;
    }
    /deep/.freight div{
      height: 1.2rem;
      padding:5px 2px 0 0;
    }
  }
  .van-pull-refresh{
    position: absolute;
    top:50px;
    bottom: 0;
    width: 100%;
  }
</style>
