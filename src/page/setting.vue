<template>
    <div>
      <template>
        <div>
          <van-nav-bar :fixed="true" :border="false" title="设置">
            <van-icon name="arrow-left" slot="left" @click="upBack()"/>
          </van-nav-bar>
        </div>
      </template>
      <div style="margin-top: 2rem">
        <van-cell-group>
          <van-switch-cell v-model="checked" title="是否允许推送消息" />
        </van-cell-group>
        <div style="margin-top: 0.45rem">
          <van-cell title="账户资料" is-link to="personalData"/>
          <van-cell title="密码管理" is-link to="password"/>
        </div>
        <div style="margin-top: 0.45rem">
          <van-cell title="反馈意见" is-link />
          <van-cell title="关于我们" is-link />
          <van-cell title="版本跟新" is-link />
        </div>
      </div>
    </div>
</template>

<script>
	export default {
		name: "setting",
    data(){
		  return{
        checked:false
      }
    },
    methods:{
      upBack(){
        this.$router.go(-1)
      }
    }
	}
</script>

<style scoped>

</style>
