import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]').map(task => {
      if (new Date(task.date) < new Date()) {
        task.status = 'outdated'
      }
      return task
    })
  },
  mutations: {
    createTask(state, task) {
      state.tasks.push(task)

      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    completeTask(state, id) {
      const idx = state.tasks.findIndex(t => t.id === id)
      state.tasks[idx].status = 'completed'

      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    updateTask(state, {id, desc, date}) {
      const tasks = state.tasks.concat()

      const idx = tasks.findIndex(t => t.id === id)
      const task = tasks[idx]

      const status = new Date(date) > new Date() ? 'active' : 'outdated'

      tasks[idx] = {...task, date, desc, status}

      state.tasks = tasks
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    removeTask(state, id) {
      let index = state.tasks.findIndex(t => t.id === id)
      state.tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }
  },
  actions: {
    createTask({commit}, task) {
      commit('createTask', task)
    },
    completeTask({commit}, id) {
      commit('completeTask', id)
    },
    updateTask({commit}, task) {
      commit('updateTask', task)
    },
  },
  getters: {
    tasks: s => s.tasks,
    taskById: s => id => s.tasks.find(t => t.id === id)
  },
  modules: {
  }
})
