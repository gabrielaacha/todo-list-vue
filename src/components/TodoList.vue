<template>
  <div border class="w-50 p-3 m-3 border border-dark">
    <div class="container py-8">
  <!-- Content here -->
   <div class="row ">
    <h1 class="d-flex justify-content-center">Todo List</h1>
   </div>

     <div class="row">
    <div class="col py-2 d-flex justify-content-center">
      <h3>Add new Todo</h3>
    </div>
  </div>

       <div class="row">
    <div class="col py-4 d-flex justify-content-center">
       <form>
        <input type="text" v-model="todo.name" />
        <button type="button" @click="addTodo(todo)">
          Add Todo
        </button>
      </form>
    </div>
  </div>


 <div class="container py-4">
   <div v-for="item in todos" :key="item['.key']">

   <div class="row d-flex justify-content-center">
    <div class="col-sm-2 py-2">
           <span v-if="item.done">
          <strong>
            <strike>
              {{ item.name }}
            </strike>
          </strong>
        </span>
         <span v-else>
          <strong>
            {{ item.name }}
          </strong>
           </span>
    </div>


    <div class="col-1">
          <button @click="todoDone(item['.key'])">
            ✓
          </button>    
    </div>
    
    <div class="col-1">
       <button @click="deleteTodo(item['.key'])">
          x
        </button>
    </div>
  </div>
  </div>
   </div>

<div class="row">
    <!-- <div class="col">
     <h3>Bind Todos from DB</h3>
    </div> -->
        <div class="col py-4 d-flex justify-content-center">
      <button type="button" @click="bindTodos">
        Bind Todos from DB
      </button>
    </div>
</div>

<div class="row ">
    <!-- <div class="col">
     <h3>Get todos from DB</h3>
    </div> -->
    <div class="col d-flex justify-content-center pb-4">
      <button type="button" @click="getTodosOnce">
        Get Todos Once from DB
      </button>
    </div>
  </div>  
     </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      todo: {
        name: null,
        done: false
      }
    };
  },
  computed: {
    todos() {
      return this.$store.getters.getTodos;
    }
  },
  methods: {
    bindTodos() {
      this.$store.dispatch("bindTodos");
    },
    getTodosOnce() {
      this.$store.dispatch("getTodosOnce");
    },
    // addTodo () {
    todoDone(payload) {
      this.$store.dispatch("todoDone", payload);
    },
    deleteTodo(payload) {
      this.$store.dispatch("deleteTodo", payload);
    },

    // ...mapActions(['bindTodos', 'getTodosOnce', 'addTodo', 'todoDone', 'deleteTodo'])
    ...mapActions(["addTodo"])
  }
};
</script>
