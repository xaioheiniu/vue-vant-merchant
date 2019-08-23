<template>
    <div>
      <template>
        <div>
          <van-nav-bar :fixed="true" :border="false" title="我的钱包">
            <van-icon name="arrow-left" slot="left" @click="upBack()"/>
          </van-nav-bar>
        </div>
      </template>
      <div style="margin-top: 2rem">
        <div class="wallet">
          <van-divider :style="{ color: '#fff',padding: '15px' }"> 账户余额 </van-divider>
          <div><span>24769.00</span></div>
          <div>
            <van-button plain hairline size='small' type="info">提现</van-button>
            <van-button plain hairline size='small' type="info">充值</van-button>
          </div>
        </div>
        <div class="list">
          <van-cell title="交易记录" icon="orders-o" label="当前交易记录有 4 笔" />
          <van-cell title="优惠卷" icon="coupon-o" label="当前优惠卷有 4 笔" />
          <van-cell title="银行卡" icon="paid" label="当前绑定银行卡有 1 张" />
        </div>
      </div>
    </div>
</template>

<script>
	export default {
		name: "wallet",
    data(){
		  return{

      }
    },
    methods:{
      upBack(){
        this.$router.go(-1)
      }
    }
	}
</script>

<style lang="less" scoped>
  .wallet{
    margin:0.45rem;
    background-image: linear-gradient(160deg, #50a8ff 20%,#5b8dfe 80%);
    border-radius:15px;
    &>div{
      display: flex;
      justify-content:center;
      font-size: 0.45rem;
    }
    &>div:nth-child(2){
      font-size: 0.63rem;
      color: #fff;
      padding-bottom: 0.81rem;
    }
    &>div:last-child{
      justify-content: space-around;
      padding-bottom: 0.81rem;
    }
  }
  .list{
    .van-cell{
      margin-bottom: 0.45rem;
    }
  }
</style>
