<template>
<div>
  <span v-bind:style='{color: authorNameColor}'>{{author}}</span>@{{shortDate}} : {{message}}
</div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class Message extends Vue {
  @Prop() message: string;

  @Prop() author: string;

  @Prop() creationDate: Date;

  get authorNameColor(): string {
    let hash = 0;
    for (let i = 0; i < this.author.length; i++) {
      hash = this.author.charCodeAt(i) + ((hash << 5) - hash);
    }
    const c = (hash & 0x00ffffff).toString(16).toUpperCase();

    return '#00000'.substring(0, 7 - c.length) + c;
  }

  get shortDate(): string {
    return this.creationDate.toDateString();
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped>

</style>
