<template>
  <div>
      <van-nav-bar :fixed="true" :border="false" title="货物分配">
          <van-icon name="arrow-left" slot="left" @click="upBack()" />
      </van-nav-bar>
      <div style="margin-top: 1.6rem">
          <template >
              <van-dropdown-menu>
                  <van-dropdown-item v-model="value1" :options="option1" />
                  <van-dropdown-item v-model="value3" :options="option3" />
                  <van-dropdown-item v-model="value2" :options="option2" />
              </van-dropdown-menu>
          </template>
          <div>
              <div class="item" >
                <van-image width="60" height="60" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
                <div @click="detail()">
                  <p v-for="item in list" :key="item.id"><span>{{item.name}}</span><span>{{item.orderL}}</span></p>
                  <p v-for="item in list1" :key="item.id"><span>{{item.name}}</span><span><van-checkbox v-model="checked"></van-checkbox></span></p>
                </div>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value1: 0,
        value2: 'a',
        value3: 'A',
        value4: 'ab',
        option1: [
          { text: '车辆类型', value: 0 },
          { text: '普货', value: 1 },
          { text: '危货', value: 2 },
          { text: '冷藏车', value: 3 }
        ],
        option2: [
          { text: '位置', value: 'a' },
          { text: '附近', value: 'b' },
          { text: '五公里内', value: 'c' },
          { text: '五公里内', value: 'd' },
        ],
        option3: [
          { text: '车载重量', value: 'A' },
          { text: '5~7吨', value: 'B'},
          { text: '10~20吨', value: 'C'}
        ],
        checked: true,
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
      },
      detail(){
        this.$router.push({name:'CarDetail'})
      }
    }
  };
</script>

<style scoped lang="less">
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
