<template>
  <div>
    这是：Layout 布局。使用axios
    <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="姓名">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input v-model="form.pwd"></el-input>
  </el-form-item>
    </el-form>

    <div class="wea">
    <el-input  v-model="input" placeholder="请输入要查询天气的城市" @blur="getWeather"></el-input>
    <el-input  type="textarea" :rows="1" placeholder="天气显示" v-model="weather"></el-input>
  </div>
  </div>
</template>
<script>
export default {
  name: "basicLayout",
  data() {
    return {
      input: "",
      weather: "",
      form:{
        name:'',
        pwd:''
      }
    };
  },
  methods: {
    getWeather() {
      let url = `https://bird.ioliu.cn/weather?city=${this.input}`;
      this.axios.get(url).then(response => {
        this.weather = response.data.daily_forecast[0].cond.txt_d
        console.log(response);
        console.log(response.data.daily_forecast[0].cond);
      });
    }
  }
};
</script>
<style scoped>
.wea{
  display: flex;
}
.el-input{
  margin:10px 20px;
  width: 200px;
}
.el-textarea{
   margin:10px 20px;
  width: 300px;
  overflow: auto;
}

</style>
