<template>
<div>
  <span class="username">{{Author}}</span>@{{CreationDate}} : {{Message}}
</div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import Vuex, { Store } from "vuex";

@Component
export default class Message extends Vue {
  @Prop() Message: string;

  @Prop() Author: string;

  @Prop() CreationDate: Date;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
