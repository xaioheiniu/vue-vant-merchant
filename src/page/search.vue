<template>
    <div>
        <div class="header">
            <van-icon name="arrow-left" @click="upBack()"/>
            <van-search placeholder="请输入搜索关键词" v-model="value" />
        </div>
    </div>
</template>

<script>
	export default {
		name: "search",
    data(){
      return{
        value:'',
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
    .header{
        display: flex;
        background: #fff;
      i{
        line-height: 50px;
        padding-left: 10px;
      }
      .van-search{
        width:100%;
      }
    }
</style>
