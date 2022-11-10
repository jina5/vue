export default{
    state: {
        todos : [
          {
            id: 1638771553377,                // nowDateObj.getTime()
            content: 'Vue',                   // Todo 내용
            dueDateTime: '2022-11-10',  // 마감일
            isCompleted: false,               // 완료된 할 일
            isImportant: true,				        // 중요 할 일
          },
          {
            id: 1638771553378,
            content: 'Vue Router',
            dueDateTime: '2021-12-10',
            isCompleted: false,
            isImportant: true,
          },
          {
            id: 16387715533779,
            content: 'Vuex',
            dueDateTime: '2021-12-11',
            isCompleted: true,
            isImportant: false,
          },
        ],
      },
    getters: {
        test(state){
            return state.todos
        },
        getTodayTodos(state){
          const date = new Date()
          const today = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
          const temp = state.todos
          const todos = temp.filter((todo) => {
            return (todo.dueDateTime===today)
          } )
          return todos
        }
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
            dueDateTime: `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`,
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
}
