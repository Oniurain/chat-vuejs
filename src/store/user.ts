import { IUser } from "../interfaces/IUser";
import { StoreOptions } from "vuex";
import { userService } from "../services/userService";

export const user: StoreOptions<any> = {
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
                        resolve();
                    })
                    .catch(() => {
                        context.commit('UpdateFailStatus', true);
                        reject();
                    }));
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
