import Vue from 'vue';
import Router from 'vue-router';
import LoginPage from '../components/LoginPage.vue';
import Chat from '../components/Chat.vue';
import NotFound from '../components/NotFound.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginPage',
      component: LoginPage,
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    },
     { path: "*", component: NotFound }
  ],
});
