<template>
<div>
<div v-for="info in infos" v-bind:key="info.id">
  <Message v-bind="info"></Message>
</div></div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import Message from "../components/Message.vue";
import Vuex, { Store } from "vuex";

@Component({
  components: { Message }
})
export default class Chat extends Vue {
  data() {
    return {
      infos: [
        { id: 1, user: "Basque", message: "a" },
        { id: 2, user: "sss", message: "aaaa" }
      ]
    };
  }
}
</script>

<style lang="scss" scoped>

</style>
