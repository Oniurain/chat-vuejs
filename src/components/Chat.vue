<template>
<div>
<div v-for="info in infos" v-bind:key="info.Id">
  <Message v-bind="info"></Message>
</div></div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Message from "../components/Message.vue";
import Vuex, { Store } from "vuex";
import { IMessageInformation } from "../interfaces/IMessageInformation";
@Component({
  components: { Message }
})
export default class Chat extends Vue {
  infos: Array<IMessageInformation> = [];
  created() {
    this.$store.dispatch("messageStore/Get").then(messageInformations => {
      this.infos = messageInformations;
    });
  }
}
</script>

<style lang="scss" scoped>

</style>
