import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      {id: 1, title: "buy some milk", is_fav: false},
      {id: 2, title: "play Gloomhaven", is_fav: true}
    ],
    name: 'Mario'
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

  }

})