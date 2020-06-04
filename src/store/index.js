import Vue from 'vue'
import Vuex from 'vuex'


const store = new Vuex.Store({
    state: {
      count: 0,
      myform:{name:'',age:0,tel:''},
      myCity:''
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  })