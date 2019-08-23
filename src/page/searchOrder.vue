<template>
    <div>
      <div>
        <template>
          <div>
            <van-nav-bar :fixed="true" :border="false" title="标题">
              <van-icon name="arrow-left" slot="left" @click="upBack()"/>
            </van-nav-bar>
          </div>
        </template>
      </div>
      <div style="margin-top: 1.6rem">
        <van-dropdown-menu>
          <van-dropdown-item v-model="value1" :options="option1" />
          <van-dropdown-item v-model="value2" :options="option2" />
        </van-dropdown-menu>
      </div>
      <div class="item">
          <van-cell icon="location-o" is-link  >
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
              <span class="iconfont">&#xe683;</span>
              <div class="end">
                <span></span>
                <span>南京市</span>
              </div>
            </van-col>
          </van-row>
        <van-cell value="内容">
          <span class="custom-title">￥720</span>
          <div>
            <van-button plain disabled  size="small" type="danger">危险品</van-button>
            <van-button plain disabled  size="small" type="info">普货</van-button>
            <van-button plain size="small" type="warning">抢单</van-button>
          </div>
        </van-cell>
        </div>
    </div>
</template>

<script>
	export default {
		name: "searchOrder",
    data() {
      return {
        value1: 0,
        value2: 'a',
        option1: [
          { text: '货源类型', value: 0 },
          { text: '普货', value: 1 },
          { text: '危货', value: 2 }
        ],
        option2: [
          { text: '用车类型', value: 'a' },
          { text: '罐车', value: 'b' },
          { text: '厢货', value: 'c' },
          { text: '大卡', value: 'd' },
        ],
      }
    },
    methods:{
      upBack(){
        this.$router.go(-1)
      }
    },
	}
</script>

<style lang="less" scoped>

  .item{
    background: #fff;
    margin-top: 0.45rem;
    .van-col--16{
      display: flex;
      padding:0.61rem 0;
      div{
        flex: 1;
        text-align: center;
        font-size: 0.45rem;
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
  }
  .van-cell .van-cell__value{
    display: flex;
    justify-content:space-between;
    &>span{
      font-size: 0.63rem;
      color: #fac030;
      line-height: 40px;
    }
  }

</style>
