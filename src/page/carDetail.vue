<template>
    <div>
      <van-nav-bar :fixed="true" :border="false" title="司机详情">
        <van-icon name="arrow-left" slot="left" @click="upBack()" />
      </van-nav-bar>
      <div class="item" style="margin-top: 1.6rem">
        <van-image width="60" height="60" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
        <div @click="detail()">
          <p v-for="item in list" :key="item.id">{{item.name}}</p>
          <p v-for="item in list1" :key="item.id"><span>{{item.name}}</span></p>
        </div>
      </div>
      <van-cell-group style="margin-top: 0.45rem">
        <van-cell title="姓名" value="张三" />
        <van-cell title="性别" value="男" />
        <van-cell title="联系方式" value="130411210119" />
        <van-cell title="车牌号" value="京N 88888" />
        <van-cell title="车载重量" value="13吨" />
        <van-cell title="车辆年检" value="2019" />
      </van-cell-group>
    </div>
</template>

<script>
	export default {
		name: "carDetail",
    data(){
		  return{
        list:[
          {orderL:'详情', name:'张三'},
          {orderL:'', name:'驾驶6年以上'},
        ],
        list1:[
          {orderL:'支付', name:'卡车：13米*12米*10米'},
        ]
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
  .item{
    padding: 0.45rem;
    background: #fff;
    display: flex;
    align-items: center;
    font-size: 0.32rem;
    margin-top: 0.45rem;
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
