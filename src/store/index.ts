import Vuex from 'vuex';
import Vue from 'vue';
import { userStore } from './user';
import { messageStore } from './message';

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        userStore,
        messageStore
    }
})
