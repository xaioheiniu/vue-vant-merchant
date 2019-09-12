<template>
  <div class="container">
    <div class="userImg">
      <van-image width="80" height="80" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
    </div>
    <div class="userInput">
      <van-field v-model="Form.user" placeholder="请输入用户名" left-icon="manager"/>
      <van-cell-group class="Pwd">
        <!--<van-field v-model="password" placeholder="请输入用户名" left-icon="lock" />
          <van-checkbox v-model="checked">
          <img width='20' slot="icon" slot-scope="props" :src="props.checked ? icon.active : icon.inactive">
        </van-checkbox>-->
        <van-field type="text" placeholder="输入密码" v-if="pwdType" v-model="Form.pass" left-icon="lock"/>
        <van-field type="password" placeholder="输入密码" v-model="Form.pass" v-else left-icon="lock"/>
        <div style="line-height:40px">
          <van-image width="20" height="20" :src="seen ? seenImg : unseenImg" @click="changeType()"
                     v-on:mouseover="hoverEye" v-on:mouseout="outEye" class="icon-eye"/>
        </div>
      </van-cell-group>

      <van-button type="default" @click="login()">登录</van-button>
      <p>
        <router-link to="/findBack">忘记密码</router-link>
      </p>
    </div>
  </div>
</template>
<script>
    import {Toast} from 'vant';

    export default {
        name: "login",
        data() {
            return {
                Form: {
                    user: 'admin',
                    pass: 'admin'
                },
              loginForm:{
                  username: undefined,
                  password: undefined
              },
                checked: true,
                seen: '',
                seenImg: '../../static/images/close_eye.png',
                unseenImg: '../../static/images/see.png',
                pwdType: true,
                userNameArr: [],
                passWordArr: [],
                showName: undefined,
            }
        },
        methods: {
            changeType() {
                this.seen = !this.seen
                this.pwdType = !this.pwdType
            },
            hoverEye: function (event) {
                this.seen = !this.seen;
            },
            outEye: function (event) {
                this.seen = !this.seen;
            },
            login() {
                if (this.loginForm.username === '' || this.loginForm.password === '') {
                    Toast('请输入正确的用户/名密码');
                } else {
                  this.loginForm.username = '{carrier}_' + this.Form.user
                  this.loginForm.password = this.Form.pass
                    this.$store.dispatch('LoginByUsername', this.loginForm).then(data => {
                        this.$router.push({path: '/home'})
                    }).catch(response => {
                      Toast('账号或密码错误')

                    })
                }
            }
        }
    }
</script>

<style lang="less" scoped>
  .container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: repeating-linear-gradient(45deg, #6d7de8, #9649e9, #9649e9, #5e64df);

    .userImg {
      text-align: center;
      padding-top: 30%;
      margin-bottom: 0.81rem;

      /deep/ .van-image img {
        border-radius: 100%;
      }
    }

    .userInput {
      margin: 0 1rem;

      .van-button {
        width: 100%;
        margin-top: 0.81rem;
        font-size: 0.45rem;
      }

      p {
        text-align: right;
        font-size: 0.38rem;
        color: #fff;
      }

      .Pwd {
        display: flex;
        margin-top: 0.81rem;
        background: #fff;
        padding-right: 20px;
      }
    }
  }
</style>

