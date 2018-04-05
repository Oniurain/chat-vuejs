<template>
  <div class="hello">
    {{name}}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Vuex, { Store } from 'vuex';
import { userInformationStore } from "../store";

@Component
export default class LoginPage extends Vue {
  name = "HelloWorld";
  msg = "Welcome to you vue.ts App";
  jobOffers: Array<any> = [2, 4];
  created() {
    this.name = this.$store.state.login;
    userInformationStore.dispatch('')
    debugger
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
