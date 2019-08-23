<template>
    <div>
      <van-nav-bar :fixed="true" :border="false" title="找回密码" right-text="提交" @click-right="onClickRight">
        <van-icon name="arrow-left" slot="left" @click="upBack()" />
      </van-nav-bar>
      <div style="margin-top: 2rem">
        <van-cell-group style="padding: 10px">
          <van-field v-model="username" required clearable label=" 用户名" placeholder="请输入用户名"/>
          <van-field v-model="sms" required center clearable label=" 短信验证码" placeholder="请输入短信验证码" >
            <van-button slot="button" size="small" type="primary" v-show="show" @click="getCode()">获取验证码</van-button>
            <van-button slot="button" size="small" type="primary" v-show="!show" class="count">{{count}} 秒</van-button>
          </van-field>
          <van-field v-model="password" type="password" label=" 重设密码" placeholder="请输入密码" required />

        </van-cell-group>
      </div>
    </div>
</template>

<script>
	export default {
		name: "findBack",
    data(){
		  return{
        username:'',
        sms:'',
        password:'',
        show: true,
        count: '',
        timer: null,
      }
    },
    methods:{
      upBack(){
        this.$router.go(-1)
      },
      getCode(){
        const TIME_COUNT = 60;
        if (!this.timer) {
          this.count = TIME_COUNT;
          this.show = false;
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--;
            } else {
              this.show = true;
              clearInterval(this.timer);
              this.timer = null;
            }
          }, 1000)
        }
      },
      onClickRight(){
        alert("信息提交")
      }
    }

	}
</script>

<style lang="less" scoped>
.van-nav-bar__text{
  color: #fff;
}
</style>
