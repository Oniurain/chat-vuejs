import Vue from 'vue';
import Router from 'vue-router';
import LoginPage from '../components/LoginPage.vue';
import JobOffer from '../components/JobOffer.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginPage',
      component: LoginPage,
    },
    {
      path: '/jobOffers/:id',
      component: JobOffer
    }
  ],
});
