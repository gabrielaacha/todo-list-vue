<template>
  <div id="app">
    <div>
      <b-nav tabs>
        <b-nav-item v-if="isLoggedIn"><router-link to="/">Home</router-link></b-nav-item>
        <b-nav-item v-if="!isLoggedIn"><router-link to="/login">Login</router-link></b-nav-item>
        <b-nav-item v-if="!isLoggedIn"> <router-link to="/register">Register</router-link></b-nav-item>
        <b-nav-item v-if="isLoggedIn"><router-link to="/todolist">To do list</router-link></b-nav-item>
        <b-nav-item v-if="isLoggedIn"><button v-on:click="logout">Logout</button></b-nav-item>

      </b-nav>
    </div>

    <div class="container-2">
      <router-view />
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "App",
  data() {
    return {
      isLoggedIn: false,
      currentUser: false
    };
  },

  created() {
    // that means we are logged in
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser.email;
    }
  },

  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/login");
        });
    }
  }
};
</script>

<style>
.app {
  font-family: Arial, Helvetica, sans-serif;
}

.container-2 {
  display: flex;
  justify-content: center;
}

#nav {
  display: flex;
  /* background-color: brown; */
  border: brown 1px solid;
}

#nav li {
  padding: 3px;
  text-decoration: none;
  list-style: none;
  border: 1px solid black;
  margin: 2px 7px;
}
</style>
