import Vue from 'vue';
import Router from 'vue-router';
import LoginPage from '../components/LoginPage.vue';
import Chat from '../components/Chat.vue';
import NotFound from '../components/NotFound.vue';
import { store } from '../store';

Vue.use(Router);

const router = new Router({
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
    { path: '*', component: NotFound }
  ],
});

router.beforeEach((to, from, next) => {
  const tmp = store;
  if (to.name != 'LoginPage') {
    tmp.dispatch('userStore/Get').then(() => {
      if (tmp.state.userStore.login) {
        next();
      }
      else {
        next('/');
      }
    });
  }
  else {
    next();
  }
})

export default router;
