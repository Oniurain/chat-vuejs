<template>
<div>
  <span class="username">{{user}}</span>@{{timer}} : {{message}}
</div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import Vuex, { Store } from "vuex";

@Component
export default class Message extends Vue {
  @Prop() message: string;

  @Prop() user: string;

  @Prop() timer: Date = new Date();
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
