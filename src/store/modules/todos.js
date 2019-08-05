import axios from "axios";

const state = {
  todos: [
    {
      id: "1",
      title: "clean house"
    },
    {
      id: "2",
      title: "home work"
    }
  ]
};
const getters = {
  allTodos: state => state.todos
};
const actions = {};
const mutations = {};
export default {
  state,
  getters,
  actions,
  mutations
};
