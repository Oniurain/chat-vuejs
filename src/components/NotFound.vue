<template>
<div>
  Oops something is wrong, you have nothing to do here... 
  <br/>
  Go back to <a href='/'>Home page</a>
</div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class NotFound extends Vue {}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped>

</style>
