import Vuex, { Store } from 'vuex';
import Vue from 'vue';
import { user } from './user';
import { IUser } from '../interfaces/IUser';

Vue.use(Vuex)

export const userInformationStore: Store<IUser> = new Vuex.Store<IUser>(user)
