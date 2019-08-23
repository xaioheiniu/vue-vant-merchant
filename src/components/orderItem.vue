<template>
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
</template>

<script>
	export default {
		name: "orderItem",
    data(){
		  return{
        list:[
          {orderL:'普货', name:'运输商家品牌'},
          {orderL:'', name:'驾驶6年以上'},
        ],
        list1:[
          {orderL:'支付', name:'卡车：13米*12米*10米'},
        ]
      }
    }
	}
</script>

<style lang="less" scoped>
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
