import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'
import router from '@/router'

Vue.use(Vuex)

const API_URL = 'http://localhost:8000'

export default new Vuex.Store({
  plugins:[
    createPersistedState()
  ],
  state: {
    articles: [],
    token: null
  },
  getters: {
    isLogin(state){
      return state.token ? true : false
    }
  },
  mutations: {
    GET_ARTICLES(state, articles){
      state.articles = articles
    },
    // 회원가입과 로그인
    SAVE_TOKEN(state, token) {
      state.token = token
      router.push({name: 'ArticleView'})
    }
  },
  actions: {
    getArticles(context){
      axios({
        method: 'get',
        url: `${API_URL}/api/v1/articles`,
        headers: {
          Authorization : `Token ${context.state.token}`
        }
      }).then((response) =>{
        // console.log(response,context)
        context.commit('GET_ARTICLES', response.data)
      }).catch((error)=>{
        console.log(error)
      })
    },
    signup(context, payload) {
      axios({
        method: 'post',
        url: `${API_URL}/accounts/signup/`,
        data: {
          username : payload.username,
          password1 : payload.password1,
          password2 : payload.password2
          }
        }).then((res)=>{
          // console.log(res)
          context.commit('SAVE_TOKEN', res.data.key)
        })
    },
    logIn(context, payload){
      axios({
        method: 'post',
        url: `${API_URL}/accounts/login/`,
        data: {
          username : payload.username,
          password : payload.password
          }
        }).then((res)=>{
          console.log(res)
          context.commit('SAVE_TOKEN', res.data.key)
        })
      }
  },
  modules: {
  },
})
