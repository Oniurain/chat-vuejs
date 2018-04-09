<template>
  <form v-on:submit='saveLogin' class='hello'>
    <span>Login:</span>
    <input v-model='login' >
    <button type='submit'>Submit</button>
    <br/>
    <span v-if='this.isFail' class='error-msg'> Your login is already taken, change it please!</span>
  </form>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class LoginPage extends Vue {
  login = '';
  get isFail(): boolean {
    return this.$store.state.userStore.isFail;
  }
  created() {
    this.$store.dispatch('userStore/Get').then(data => {
      if (this.$store.state.login) {
        this.$router.push({ path: '/chat' });
      }
    });
  }
  saveLogin() {
    this.$store.dispatch('userStore/Add', { login: this.login }).then(() => {
      this.$router.push({ path: '/chat' });
    });
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped>
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
