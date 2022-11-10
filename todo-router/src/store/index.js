import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import todo from '@/store/modules/todo.js'

export default new Vuex.Store({
  modules: {
    todo
  }
})
