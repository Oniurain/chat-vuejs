<template>
<div>
  <span v-bind:style="{color: authorNameColor}">{{Author}}</span>@{{shortDate}} : {{Message}}
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

  get authorNameColor(): string {
    let hash = 0;
    for (let i = 0; i < this.Author.length; i++) {
      hash = this.Author.charCodeAt(i) + ((hash << 5) - hash);
    }
    const c = (hash & 0x00ffffff).toString(16).toUpperCase();

    return "#00000".substring(0, 7 - c.length) + c;
  }

  get shortDate(): string {
    return this.CreationDate.toDateString();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
