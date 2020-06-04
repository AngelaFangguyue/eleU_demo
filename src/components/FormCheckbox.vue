<template>
  <div>
    <div>这是：Checkbox 多选框</div>
    <div>下面是对输入框的一些测试：</div>
    <div>
      <span>1：基本输入框</span>
      <el-input v-model="input" placeholder="请输入内容" @blur="ale" :input="fgy" @input="doThis"></el-input>
      <div style="margin:10px 0">2：带输入建议的输入框</div>
      <el-row>
        <el-col :span="12">
          <div class="sub-title">激活即列出输入建议</div>
          <el-autocomplete
            class="inline-input"
            v-model="state1"
            :fetch-suggestions="querySearch"
            placeholder="请输入内容"
            @select="handleSelect"
          ></el-autocomplete>
        </el-col>
      </el-row>
      <div style="margin:10px 0">3.1：下拉选择框</div>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"
        >{{item.label}}</el-option>
      </el-select>
      <div style="margin:10px 0">3.2：多选框</div>
      <el-select multiple v-model="minute" placeholder="请选择">
        <el-option v-for="val in 60" :key="val" :label="val" :value="val.toString()">{{val}}</el-option>
      </el-select>
      <div style="margin:10px 0">3.3：分组多选框</div>
      <el-select multiple v-model="minute" placeholder="请选择">
        <el-option-group v-for="group in options1" :key="group.label" :label="group.label">
          <el-option
            v-for="item in group.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-option-group>
        <!-- <el-option
      v-for="val in options1"
      :key="val.label"
      :label="val.label"
      :value="val">{{val}}
        </el-option>-->
      </el-select>
      <div style="margin:10px 0">4：Upload上传</div>
      <el-upload
        class="upload-demo"
        action="#"
        :auto-upload="false"
        ref="projectImg"
        :data="editProjectInfo"
        name="img"
        list-type="picture-card"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :on-change="handleChange"
        :before-remove="beforeRemove"
        :limit="1"
        :on-exceed="handleExceed"
      >
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
      <label>
        原生上传文件：
        <input type="file" />
      </label>

      <el-form :model="rform" ref="form1" :rules="rules">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="rform.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input v-model="rform.password" type="password" autocomplete="off"></el-input>
        </el-form-item>
        <!-- <el-button @submit="submitForm('form1')">提交</el-button> -->
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormCheckbox",
  data: function() {
    return {
      rform: { name: "", password: "" },
      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      },
      input: "",
      fgy: "fgygyf",
      restaurants: [
        { value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号" },
        {
          value: "Hot honey 首尔炸鸡（仙霞路）",
          address: "上海市长宁区淞虹路661号"
        },
        {
          value: "新旺角茶餐厅",
          address: "上海市普陀区真北路988号创邑金沙谷6号楼113"
        },
        { value: "111", address: "上海市普陀区真北路988号创邑金沙谷6号楼113" }
      ],
      state1: "",
      state2: "",
      value: "",
      options1: [
        {
          label: "food",
          options: [
            {
              value: "选项1",
              label: "黄金糕"
            },
            {
              value: "选项2",
              label: "双皮奶",
              disabled: true
            },
            {
              value: "选项3",
              label: "蚵仔煎"
            }
          ]
        },
        {
          label: "city",
          options: [
            {
              value: "选1",
              label: "金糕"
            },
            {
              value: "选2",
              label: "皮奶",
              disabled: true
            },
            {
              value: "选3",
              label: "仔煎"
            }
          ]
        }
      ],

      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶",
          disabled: true
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        }
      ],

      minute: ["1", "5"],
      editProjectDialog: false,
      editProjectInfo: {
        id: "",
        real_id: "",
        name: "",
        intro: "",
        project_type: "",
        engine_type: "",
        admin_url: "",
        img: ""
      },
      ff: [],
      fl: [
        { name: "logo.png", url: "../assets/logo.png" },
        { name: "2.jpeg", url: "###2" }
      ]
      // fileList: [
      //   {
      //     name: "food.jpeg",
      //     url:
      //       "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
      //   },
      //   {
      //     name: "food2.jpeg",
      //     url:
      //       "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
      //   }
      // ]
    };
  },
  methods: {
    submitForm() {},
    querySearch(queryString, callback) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      callback(results);
      console.log("callback", callback);
      console.log(results);
    },
    createFilter(queryString) {
      //会根据输入的值去出现提示消息
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    ale() {
      console.log("hihi");
    },
    testEvents() {
      console.log("测试事件");
    },
    doThis() {
      console.log("测试按钮点击事件");
      //
      let arr1 = [1, 2, 3];
      let arr2 = [21, 22, 23];
      let arr3 = [31, 32, 33];
      let arrall = [...arr1, ...arr2, ...arr3];
      const obj = { name: "xxx", age: 12, add: "yy" };
      let { name } = obj;
      console.log("max-arr2:", Math.max.apply(null, arr2));
      console.log(arrall, name);
    },
    handleSelect() {},
    remoteMethods() {},
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
      console.log(this.editProjectInfo);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    handleChange() {},
    beforeRemove(file) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    openEditDialog(data) {
      this.editProjectInfo = JSON.parse(JSON.stringify(data));
      if (this.editProjectInfo.img) {
        this.ff = [
          {
            name: `${this.editProjectInfo.id}.png}`,
            url: this.editProjectInfo.img
          }
        ];
      } else {
        this.ff = [];
      }
      this.editProjectDialog = true;
    }
  }
};
</script>