import Vuex, { Store } from 'vuex';
import Vue from 'vue';
import { userStore } from './user';
import { messageStore } from './message';
import { IUser } from '../interfaces/IUser';

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        userStore,
        messageStore
    }
})
