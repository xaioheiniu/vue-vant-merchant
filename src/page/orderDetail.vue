<template>
  <div>
      <van-nav-bar :fixed="true" :border="false" title="订单详情">
        <van-icon name="arrow-left" slot="left" @click="upBack()" />
      </van-nav-bar>
      <div style="margin-top: 1.6rem">
        <div class="item">
          <van-image width="80" height="80" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
          <div>
            <p v-for="item in list" :key="item.id">{{item.name}}</p>
            <p v-for="item in list1" :key="item.id"><span>{{item.name}}</span></p>
          </div>
        </div>
        <van-cell-group style="margin-top: 0.45rem">
          <van-cell title="获取详情"/>
          <van-cell title="货主信息" value="大地博方科技" />
          <van-cell title="发货人" value="张三" />
          <van-cell title="发货人联系方式" value="130411210119" />
          <van-cell title="运输货品类型" value="普货" />
          <van-cell title="运输货物重量" value="13吨" />
          <van-cell title="发货地址" value="北京大兴区1号仓库" />
          <van-cell title="收货地址" value="天津港1号仓库" />
          <van-cell title="提货人" value="王麻子" />
          <van-cell title="提货人联系方式" value="15880987890" />
          <van-cell title="备注" label="提货时请报提货人姓名以及提货联系方式" />
        </van-cell-group>
      </div>
  </div>
</template>
<script>
  import OrderItem from "../components/orderItem";
  export default{
    components: {OrderItem},
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
    },
    methods:{
      upBack(){
        this.$router.go(-1)
      }
    }
  }
</script>
<style lang="less">
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
