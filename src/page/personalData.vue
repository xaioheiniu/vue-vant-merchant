<template>
  <div>
    <template>
      <div>
        <van-nav-bar :fixed="true" :border="false" title="个人资料">
          <van-icon name="arrow-left" slot="left" @click="upBack()"/>
        </van-nav-bar>
      </div>
    </template>
    <div class="hello" style="margin-top: 2rem">
      <!-- 导航栏 代码省略-->

      <!-- 登录页 用户表单 -->
      <van-cell-group style="padding:10px">
          <van-field v-model="item.username" clearable label="用户名" required placeholder="请输入用户名" />
          <van-field v-model="item.sex" clearable label="性别" required placeholder="请输入性别" />
          <van-field v-model="item.age" clearable label="年龄" required placeholder="请输入年龄" />
          <van-field v-model="item.autoAge" clearable label="车龄" required placeholder="请输入车龄" />

          <van-field v-model="item.carNumber" clearable label="车牌" required placeholder="请输入车辆信息" />
          <van-field v-model="item.carWeight" clearable label="车载重量" required placeholder="请输入车辆信息" />
          <van-field v-model="item.carHW" clearable label="车辆高宽" required placeholder="请输入车辆信息" />
          <van-field v-model="item.carAS" clearable label="车辆年检" required placeholder="请输入车辆信息" />
        <!--登录按钮-->
        <div class="btn"><van-button type="primary"  @click="onClickButtonSubmit">提交</van-button></div>
      </van-cell-group>
    </div>
  </div>

</template>

<script>
  import { Toast } from 'vant';
	export default {
		name: "personalData",
    data(){
		  return{
		    item:{
          username:'',
          sex:'',
          age:'',
          autoAge:'',
          carNumber:'',
          carWeight:'',
          carHW:'',
          carAS:''
        },
        grouplist:'',

      }
    },
    methods:{
      onClickButtonSubmit(){

        },
      upBack(){
        this.$router.go(-1)
      }
    }
	}
</script>

<style lang="less" scoped>
  .btn{
    margin: 1rem 0.45rem;
    padding-bottom: 2rem;
    .van-button{
      width: 100%;
    }
  }
</style>
