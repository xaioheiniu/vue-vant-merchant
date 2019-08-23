<template>
  <div>
    <template>
      <div>
        <van-nav-bar :fixed="true" :border="false" title="密码重置">
          <van-icon name="arrow-left" slot="left" @click="upBack()"/>
        </van-nav-bar>
      </div>
    </template>
    <div class="hello" style="margin-top: 2rem">
      <!-- 导航栏 代码省略-->

      <!-- 登录页 用户表单 -->
      <van-cell-group>
        <van-field v-model="pwd" clearable label="旧密码" placeholder="请输入旧密码" />
        <van-field v-model=newPwd clearable label="新密码" placeholder="请输入新密码" />
        <!--登录按钮-->
        <div class="btn"><van-button type="primary" size="small" @click="onClickButtonSubmit">提交</van-button></div>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
	export default {
		name: "password",
    data(){
		  return{
        pwd:'',
        newPwd:''
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
    padding-bottom: 1rem;
    .van-button{
      width: 100%;
    }
  }
</style>
