<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" /> -->
    <!-- <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div>
      <el-container>
        <el-header class="header">
          <Header />
        </el-header>
        <el-container>
          <el-aside width="200px">
            <NavMenu />
          </el-aside>
          <el-main
            >Main
            <router-view />
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import NavMenu from "@/components/NavMenu";
import Header from "@/components/Header";

export default {
  name: "app",
  components: {
    // HelloWorld,
    NavMenu,
    Header,
  },
};
</script>

<style>
.header {
  background-color: #409eff;
  color: #fff;
  line-height: 60px;
}
</style>
