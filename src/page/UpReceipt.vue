<template>
  <div>
    <div>
      <template>
        <div>
          <van-nav-bar :fixed="true" :border="false" title="回单上传">
            <van-icon name="arrow-left" slot="left" @click="upBack()"/>
          </van-nav-bar>
        </div>
      </template>
    </div>
    <div style="margin-top: 2rem">
      <van-cell-group>
        <van-field v-model="takeTime" label="收货时间" />
        <van-field v-model="takeName" label="收货人"/>
        <van-field v-model="takeIphone" label="收货人电话"/>
        <van-field v-model="takeAdd" label="收货地址"/>
        <van-field v-model="takeOrder" label="订单号"/>
        <van-field v-model="message" label="备注信息" type="textarea" rows="2" autosize />
      </van-cell-group>
      <van-cell-group class="borderLeft">
        <div class="van-title">为您推荐</div>
      </van-cell-group>
      <div class="upload">
          <van-uploader v-model="fileList" multiple accept="*" :max-count="3" />
      </div>
    </div>
    <div class="btn">
      <van-button size="small" type="info">提交回单</van-button>
    </div>
  </div>
</template>

<script>

  export default {
    data(){
      return{
        takeTime:'2019-09-09  12:09:00',
        takeName:'张三',
        takeIphone:'13212131231',
        takeAdd:"北京市大兴区1号仓库",
        takeOrder:'4578644990',
        message:'这是备注信息',
        fileList: [],
      }
    },
    methods:{
      upBack(){
        this.$router.go(-1);//返回上一层
      },

    }
  }
</script>

<style scoped lang="less">
  .upload{
    background: #fff;
    padding-left: 0.45rem;

  }
.btn {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  button{
    width: 90%;
  }
}

</style>

