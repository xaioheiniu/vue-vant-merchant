<template>
  <div>
      <div>
        <template>
          <van-nav-bar fixed title="消息" />
        </template>
      </div>
    <div class="list-item">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <template>
            <p style="text-align: center;font-size: 0.45rem">2019-09-08 12:12:08</p>
            <div class="message">
              <van-cell-group><van-cell title="订单消息"/></van-cell-group>
              <p>您的订单正在配送中</p>
            </div>
          <div class="message">
            <van-cell-group><van-cell title="订单消息"/></van-cell-group>
            <p>您的订单正在配送中</p>
          </div>
          <div class="message">
            <van-cell-group><van-cell title="订单消息"/></van-cell-group>
            <p>您的订单正在配送中</p>
          </div>
        </template>
      </van-pull-refresh>
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
    export default {
        name: "messages",
      data(){
        return{
          active: 'messages',
          isLoading: false,//下拉刷新
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
      }
    }
</script>

<style lang="less" scoped>
  .list-item{
    margin-top: 2rem;
  }
  .message{
    background: #fff;
    margin-bottom: 0.45rem;
    p{
      font-size: 0.32rem;
      padding:0 0 0.45rem 0.45rem;
      margin: 0;
      color: #999;
    }
  }
  .van-pull-refresh{
    position: absolute;
    top:50px;
    bottom: 0;
    width: 100%;
  }
  /*.message{
    background: #fff;
    padding: 0.45rem;
    margin-top:0.45rem;
    display: flex;
    justify-content:flex-start;
    &>div:last-child{
      padding-left: 0.45rem;
      flex: 1;
      p{
        padding:0;
        margin: 0;
        font-size: 0.324rem;
        color: #777;
        &:first-child{
          display: flex;
          justify-content: space-between;
          font-size: 0.486rem;
          color: #333;
          &>span{
            display: block;
            padding-bottom: 0.35rem;
          }
        }
      }
    }
  }*/
</style>
