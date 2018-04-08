<template>
<div id="chat">
<div class="users">
  Connected Users ({{usersCount}}):
<span v-for="connectedUser in connectedUsers" v-bind:key="connectedUser">
  {{connectedUser}}
</span>
</div>
<div class="messages" >
  <Message v-for="info in infos" v-bind:key="info.Id" v-bind="info"></Message>
</div>
</div>
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
  connectedUsers: Array<string> = [];
  created() {
    this.$store.dispatch("messageStore/Get").then(messageInformations => {
      this.infos = messageInformations;
    });
    this.$store.dispatch("userStore/GetAll").then(users => {
      this.connectedUsers = users;
    });
  }

  get usersCount(){
    return this.connectedUsers.length;
  }
}
</script>

<style lang="scss" scoped>
#chat {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  .messages,
  .users {
    flex-direction: column;
  }
  .users {
    text-align: left;
    border: 1px solid green;
    span {
      display: block;
    }
  }
}
</style>
