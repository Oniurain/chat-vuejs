import { IUser } from '../interfaces/IUser';
import { Module } from 'vuex';
import { userService } from '../dataServices/userService';

export const userStore: Module<any, any> = {
    namespaced: true,
    state: {
        login: '',
        isFail: false
    },
    actions: {
        Add: (context, login) => {
            return new Promise((resolve, reject) =>
                userService.Add(login)
                    .then((data) => {
                        context.commit('UpdateLogin', data.login);
                        context.commit('UpdateFailStatus', false);
                        sessionStorage.setItem('login', data.login);
                        resolve(data);
                    })
                    .catch(() => {
                        context.commit('UpdateFailStatus', true);
                        reject();
                    }));
        },
        Get: (context) => {
            return new Promise<string>((resolve) => {
                const login = sessionStorage.getItem('login');
                if (login) {
                    userService.Add({ login });
                    context.commit('UpdateLogin', login);
                }
                resolve();
            });
        },
        GetAll: (context) => {
            return new Promise((resolve) => {
                userService.GetAll().then(users => {
                    resolve(users);
                })
            });
        }
    },
    mutations: {
        UpdateLogin: (state, login) => {
            state.login = login;
        },
        UpdateFailStatus: (state, isFail) => {
            state.isFail = isFail;
        }
    }
}
