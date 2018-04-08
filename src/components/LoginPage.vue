<template>
  <div class="hello">
    <span>Login:</span>
    <input v-model="login" >
    <button v-on:click="saveLogin">Submit</button>
    <br/>
    <span v-if="this.$store.state.isFail" class="error-msg"> Your login is already taken, change it please!</span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Vuex, { Store } from "vuex";

@Component
export default class LoginPage extends Vue {
  login = "";
  created() {}
  saveLogin() {
    this.$store.dispatch("Add", { login: this.login }).then(() => {
      this.$router.push({ path: "/chat" });
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.error-msg {
  color: red;
}
</style>
