<!--<template>
  <div>
    <template>
      <div>
        <van-nav-bar :fixed="true" :border="false" title="回单上传">
          <van-icon name="arrow-left" slot="left" @click="upBack()"/>
        </van-nav-bar>
      </div>
    </template>
    <div style="margin-top:2rem">
      <div class="date-time-input-wrap">
        <van-field
          v-model="loginForm.startTime"
          label="有效日期"
          placeholder="选择时间"
          @click="startTimePop = true"
        />
        <van-popup v-model="startTimePop" label="有效日期" position="bottom" :overlay="true">
          <van-datetime-picker
            v-model="currentDate"
            type="date"
            @cancel="startTimePop = false"
            @confirm="startTimePop = false"/>
        </van-popup>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "upAbnormal",
    data() {
      return {
        /*name:undefined,
        userListForm:undefined,
        endTimePop:true,
        currentDate_end:undefined,
        end_time:undefined,*/
        loginForm:111,
        startTime:222,
        currentDate:333,
        startTimePop:true,
      };
    },
    methods:{
		  upBack(){
		    this.$router.go(-1)
      },
      submit() {

      },
    }
	}
</script>-->

<template>
  <div>
      <div>
        <van-nav-bar :fixed="true" :border="false" title="回单上传">
          <van-icon name="arrow-left" slot="left" @click="upBack()"/>
        </van-nav-bar>
      </div>
    <div style="margin-top: 2rem">
      <template>
        <span class="inputText"><label>上报时间：</label><input ref="termStart"  value="请输入上报时间" class="input" @click="showDatePicker('termStart')"/></span>
        <van-popup v-model="isPopShow" position="bottom">
          <!-- 开始时间 -->
          <van-datetime-picker
            @cancel="cancelPicker"
            @confirm="confirmPicker"
            v-model="startTime"
            type="datetime"
            :formatter="formatter"
            :max-date="currentTime"
          />
        </van-popup>
      </template>
      <template>
        <span class="inputText">
          <label>上报地点：</label>
          <input class="input" v-model="province" @click="show()" placeholder="选择省/市/区"/>
          <input class="input" v-model="city" @click="show"/>
          <input class="input" v-model="district" @click="show"/>
        </span>
          <van-popup v-model="flag" position="bottom">
              <van-area :area-list="areaList"  @confirm="onAddrConfirm" @cancel="shut" :value="addrCode"/>
          </van-popup>
      </template>
      <van-field v-model="addDetail" label="详细地址：" placeholder="请输入详细地址" />
      <template>
        <span class="inputText"><label>上报类型：</label>
          <div>
            <van-checkbox-group v-model="result">
              <van-checkbox v-for="(item, index) in list" :key="item.typeof" :name="item">
                {{ item.typeof }}
              </van-checkbox>
            </van-checkbox-group>
          </div>
        </span>
        <van-field v-model="message" label="备注信息" type="textarea" rows="2" autosize />
      </template>
      <template>
        <div class="upload">
          <van-uploader v-model="fileList" multiple accept="*" :max-count="3" />
        </div>
      </template>
      <div class="btn">
        <van-button size="small" type="info">提交回单</van-button>
      </div>
    </div>
  </div>
</template>
<script>
  import areaList from "../area/demo/area";
  export default {
    data(){
      return{
        areaList,
        searchResult: [],
        currentTime: new Date(), // 开始时间不能超过当前时间
        startTime: new Date(), // 开始时间
        endTime: new Date(), // 结束时间
        datePicker: '', // 用于判断哪个选择器的显示与隐藏
        isPopShow: false, // 弹出层隐藏与显示
        flag:false,
        addrCode: '440105',
        province:'',
        city:'',
        district:'',
        addDetail:'',
        result: ['a', 'b'],
        list:[
          {typeof : '汽车爆胎'},
          {typeof : '车辆意外'},
          {typeof : '货物装不下'}
        ],
        message:'这里是备注信息',
        fileList: [],
      }
    },

    methods: {
      upBack(){
        this.$router.go(-1)
      },
      onAddrConfirm (e) { // 点击确认，获取所选的省市区数据
        // 确定选择,返回的必定是三元素数组
        console.log('this.onAddrConfirm=>e', e)
        this.province = e[0].name
        this.city = e[1].name
        this.district = e[2].name
        this.flag = false
      },
      shut () {
        this.flag = false
      },
      show () {
        this.flag = true
      },




      showDatePicker(picker) { //弹出层并显示时间选择器
        this.isPopShow = true;
        this.datePicker = picker;
      },
      cancelPicker() { // 选择器取消按钮点击事件
        this.isPopShow = false;
        this.datePicker = "";
      },
      confirmPicker(value) {// 确定按钮，时间格式化并显示在页面上
        var date = value;
        var m = date.getMonth() + 1;
        var d = date.getDate();
        var h = date.getHours();
        var f = date.getMinutes();
        var s = date.getSeconds();
        if (m >= 1 && m <= 9) {
          m = "0" + m;
        }
        if (d >= 0 && d <= 9) {
          d = "0" + d;
        }
        if (h >= 0 && h <= 9) {
          h = "0" + h;
        }
        if (f >= 0 && f <= 9) {
          f = "0" + f;
        }
        if (s >= 0 && s <= 9) {
          s = "0" + s;
        }
        var timer = date.getFullYear() + "-" + m + "-" + d + " " + h + ":" + f + ":" + s
        this.$refs[this.datePicker].value = timer;
        this.isPopShow = false;
        this.datePicker = "";
      },
      formatter(type, value) {// 格式化选择器日期
        if (type === "year") {
          return `${value}年`;
        } else if (type === "month") {
          return `${value}月`;
        }else if (type === "hours") {
          return `${value}时`;
        }else if (type === "minutes") {
          return `${value}分`;
        }else if (type === "seconds") {
          return `${value}秒`;
        }
        return value;
      },
    }
  }
</script>


<style lang="less" scoped>
  .inputText{
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 0.266667rem 0.4rem;
    overflow: hidden;
    color: #323233;
    font-size: 0.373333rem;
    line-height: 0.64rem;
    background-color: #fff;
  }
  label{
    flex: none;
    width: 2.4rem;
  }
.input{
  display: block;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 0;
  color: #323233;
  text-align: left;
  background-color: transparent;
  border: 0;
  resize: none;
}
  span{
    .van-checkbox{
      padding-bottom:0.45rem;
    }
  }
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



<!--

<template>
  <div>
    <van-address-edit
      :area-list="areaList"
      :address-info="addressInfo"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
    <div><span>公司名称：</span><input v-model="comName"/></div>
    <div><span>姓名：</span><input v-model="name"/></div>
    <div><span>移动电话：</span><input v-model="phone"/></div>
    <div style="font-size: 14px"><span style="margin-left: 13px">公司地址：</span><input class="addr-input" v-model="province" @click="show" />
      <input class="addr-input" v-model="city" @click="show"/>
      <input class="addr-input" v-model="district" @click="show"/>
      <van-field
        v-model="street"
        type="text"
        placeholder="街道门牌、楼层房间号等信息"
      />
    </div>
    <div v-show="flag">
      <van-area :area-list="areaList" :item-height=25 @confirm="onAddrConfirm" @cancel="shut" :value="addrCode"/>
    </div>
  </div>
</template>

<script>
  import areaList from "../area/demo/area";
  export default {
    components: {areaList},
    data () {
      return {
        comName: {},
        searchResult: '',
        addrCode: '440105',
        province: '',
        city: '',
        district: '',
        street: '',
        companyName: '',
        name: '',
        phone: '',
        address: '',
        areaList: null,
        flag: false
        // flag: true
      }
    },
    created () {
      this.init()
    },
    methods: {
      init () {
        // 初始化地址选择器
        this.areaList = areaList.areaList // 初始化选择器数据
        // 初始化复选框
        this.allMajor = this.getMajor()
      },
      show () {
        this.flag = true
      },
      onAddrConfirm (e) { // 点击确认，获取所选的省市区数据
        // 确定选择,返回的必定是三元素数组
        console.log('this.onAddrConfirm=>e', e)
        this.province = e[0].name
        this.city = e[1].name
        this.district = e[2].name
        this.flag = false
      },
      shut () {
        this.flag = false
      },
      onChangeDetail (val) {
        if (val) {
          this.searchResult = [{
            name: '黄龙万科中心',
            address: '杭州市西湖区'
          }]
        } else {
          this.searchResult = []
        }
      }
    }
  }
</script>

<style scoped>

</style>
-->
