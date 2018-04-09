<template>
<div id='chat'>
<div class='users'>
  Connected Users ({{usersCount}}):
<span v-for='connectedUser in connectedUsers' v-bind:key='connectedUser'>
  {{connectedUser}}
</span>
</div>
<div class='messages' >
  <a v-if='canLoadMore' v-on:click='viewMore'>Load More</a>
  <Message v-for='info in infos' v-bind:key='info.id' v-bind='info'></Message>
</div>
<form v-on:submit='sendMessage'>
  <textarea v-model='newMessage'></textarea>
  <input type='submit'>
</form>
</div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Message from '../components/Message.vue';
import { IMessageInformation } from '../interfaces/IMessageInformation';

@Component({
  components: { Message }
})
export default class Chat extends Vue {
  connectedUsers: Array<string> = [];
  newMessage: string = '';
  currentUser: string = this.$store.state.userStore.login;

  get usersCount() {
    return this.connectedUsers.length;
  }

  get infos() {
    debugger
    return this.$store.state.messageStore.messages;
  }

  get canLoadMore() {
    return this.$store.state.messageStore.firstIndexLoaded > 0;
  }

  created() {
    this.$store.dispatch('messageStore/Get');
    this.$store.dispatch('userStore/GetAll').then(users => {
      this.connectedUsers = users;
    });
  }

  sendMessage() {
    this.$store
      .dispatch('messageStore/Add', {
        message: this.newMessage,
        author: this.currentUser,
        creationDate: new Date()
      })
      .then(() => {
        this.newMessage = '';
      });
  }
  viewMore() {
    this.$store.dispatch('messageStore/Get', true);
  }
}
</script>

<style lang='scss' scoped>
#chat {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  .messages,
  .users {
    flex-direction: column;
    text-align: left;
  }
  .users {
    border: 1px solid green;
    height: 100px;
    span {
      display: block;
    }
  }
}
</style>
