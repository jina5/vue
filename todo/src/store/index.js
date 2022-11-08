import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos : [
			// 개별 todo Object
      {
        id: 1638771553377,                // nowDateObj.getTime()
        content: 'Vue',                   // Todo 내용
        dueDateTime: '2021-12-09T00:00',  // 마감일
        isCompleted: false,               // 완료된 할 일
        isImportant: true,				        // 중요 할 일
      },
      {
        id: 1638771553378,
        content: 'Vue Router',
        dueDateTime: '2021-12-10T00:00',
        isCompleted: false,
        isImportant: true,
      },
      {
        id: 16387715533779,
        content: 'Vuex',
        dueDateTime: '2021-12-11T00:00',
        isCompleted: true,
        isImportant: false,
      },
    ],
  },
  getters: {
  },
  mutations: {
    CREATE_TODO(state,todoItem){
      state.todos.push(todoItem)
    },
    UPDATE_COMPLETED_STATE(state,todoItem){
      const index = state.todos.indexOf(todoItem)
      state.todos[index].isCompleted = !state.todos[index].isCompleted
    },
    UPDATE_IMPORTANT_STATE(state,todoItem){
      const index = state.todos.indexOf(todoItem)
      state.todos[index].isImportant = !state.todos[index].isImportant
    },
    UPDATE(state,todo){
      const index = state.todos.indexOf(todo)
      state.todos[index]=todo
    }

  },
  actions: {
    createTodo(context,todo){
      const today = new Date()
      const todoItem = {
        id: today.getTime(),              
        content : todo,
        dueDateTime: `${today.getFullYear()}-${('0' + today.getMonth()).slice(-2)+1}-${('0' + today.getDate()).slice(-2)+1}T00:00`,
        isCompleted: false,            
        isImportant: false,		
      }
      context.commit('CREATE_TODO',todoItem)
    },
    updateCompletedState(context,todo){
      context.commit('UPDATE_COMPLETED_STATE',todo)
    },
    updateImportantState(context,todo){
      context.commit('UPDATE_IMPORTANT_STATE',todo)
    },
    update(context,todo){
      context.commit('UPDATE',todo)
    }
  },
  modules: {
  }
})
