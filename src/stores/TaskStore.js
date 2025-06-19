import axios from 'axios'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [],
    is_loading: false
  }),

  getters: {
    favs: (state) => {
      return state.tasks.filter(task => task.is_fav)
    },

    favCount: (state) => {
      return state.tasks.reduce((pre, curr) => {
        return curr.is_fav ? pre + 1 : pre
      }, 0)
    },

    allCount: (state) => {
      return state.tasks.length
    }

  },

  actions: {
    async getTask(){
      this.is_loading = true
      const data = await axios.get('http://localhost:3000/tasks')
      const tasks = await data.data
      this.tasks = tasks
      this.is_loading = false
    },
    
    async addTask(newTask){
      await axios.post('http://localhost:3000/tasks', newTask)
      this.tasks.push(newTask)
    },

    deleteTask(id){
      this.tasks = this.tasks.filter(task => {
        return task.id !== id
      })
    },

    toggleFav(id){
      const task = this.tasks.find(task => task.id === id )
      task.is_fav = !task.is_fav
    }
  }

})