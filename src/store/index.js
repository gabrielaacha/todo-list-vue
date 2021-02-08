import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";
import { vuexfireMutations, firebaseAction } from "vuexfire";

const db = firebase.database();
const todosRef = db.ref("todos");

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    setTodos(state, payload) {
      state.todos = payload;
    },
    ...vuexfireMutations
  },
  actions: {
    bindTodos: firebaseAction(({ bindFirebaseRef }) => {
      bindFirebaseRef("todos", todosRef);
    }),
    getTodosOnce({ commit }) {
      // db.ref('todos').once('value', snapshot => {
      todosRef.once("value", snapshot => {
        const todosDB = snapshot.val();
        commit("setTodos", todosDB);
      });
    },
    addTodo: firebaseAction((context, payload) => {
      // db.ref('todos').push(payload)
      todosRef.push(payload);
    }),
    todoDone: firebaseAction((context, payload) => {
      db.ref(`todos/${payload}/done`).set(true);
    }),
    deleteTodo: firebaseAction((context, payload) => {
      db.ref(`todos/${payload}`).remove();
    })
  },
  getters: {
    getTodos: state => state.todos
  }
});
