<template>
  <div class="container w-50 pt-4 m-4 border border-dark d-flex justify-content-center">

  <form class="row g-3 w-50 p-3 needs-validation" novalidate>

  <h3 class="d-flex justify-content-center">Login</h3>

  <div class="col-12">
    <label for="validationCustom01" class="form-label">First name</label>
    <input type="email" name="email" class="form-control" id="validationCustom01" value="Mark" v-model="email" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>  
  
  <div class="col-12">
    <label for="validationCustom02" class="form-label">Password</label>
    <input type="password" class="form-control" id="validationCustom02" value="Otto"  v-model="password" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>

  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>

  <div class="col-12 d-flex justify-content-center">
    <button class="btn btn-primary mb-4" type="submit" v-on:click="login">Login</button>
  </div>
</form>

  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "login",
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert(`you are logged in as ${user.email}`);
            this.$router.push("/");
          },
          err => {
            alert(err.message);
          }
        );
      e.preventDefault();
    }
  }
};
</script>

