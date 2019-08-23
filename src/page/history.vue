<template>
  <div>
    <div>
      <van-nav-bar :fixed="true" :border="false" title="历史订单">
        <van-icon name="arrow-left" slot="left" @click="upBack()"/>
      </van-nav-bar>
    </div>
    <template>
      <div class="item" style="margin-top: 1.6rem">
        <van-image width="70" height="70" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
        <div>
          <p v-for="item in list" :key="item.id"><span>{{item.name}}</span><span>{{item.orderL}}</span></p>
          <p v-for="item in list1" :key="item.id"><span>{{item.name}}</span></p>
        </div>
      </div>
    </template>
    <div class="list-history">
      <van-cell-group>
        <van-cell title="订单跟踪" />
      </van-cell-group>
      <!--<van-steps direction="vertical" :active="0">
        <van-step>
          <h3>【城市】物流状态1</h3>
          <p>2016-07-12 12:40</p>
        </van-step>
        <van-step>
          <h3>【城市】物流状态2</h3>
          <p>2016-07-11 10:00</p>
        </van-step>
        <van-step>
          <h3>快件已发货</h3>
          <p>2016-07-10 09:30</p>
        </van-step>
      </van-steps>-->
      <steps></steps>
    </div>
  </div>
</template>

<script>
	import Steps from "./steps";
  import OrderItem from "../components/orderItem";
  export default {
		name: "history",
    components: {OrderItem, Steps},
    data(){
		  return{
        list:[
          { name:'运输商家品牌'},
          {orderL:'', name:'驾驶6年以上'},
        ],
        list1:[
          { name:'卡车：13米*12米*10米'},
        ]
      }
    },
    created(){
      console.log(this.$route.query)
    },
    methods:{
      upBack(){
        this.$router.go(-1)
      }
    },
	}
</script>

<style lang="less" scoped>

.list-name{
  display: flex;
  justify-content: flex-start;
  background: #fff;
  .van-image{
    padding:0.45rem;
  }
}
.list-history{
  margin-top: 0.45rem;
  /deep/.van-step--vertical{
    padding:0;
  }
  .van-cell__title span{
    font-size: 0.405rem;
    border-left: 5px solid #fac030;
    padding-left: 0.27rem;
  }
}
.item{
  padding: 0.45rem;
  background: #fff;
  display: flex;
  align-items: center;
  font-size: 0.32rem;
  div:last-child{
    flex:1;
    p{
      display: flex;
      justify-content: space-between;
      margin: 5px 10px;
      font-size: 0.32rem;
    }
    p:first-child span:last-child{
      color:#ff6600;
    }
    p:last-child {
      button{
        background: #ff9900;
        border:none;
      }
    }
  }
}
</style>
