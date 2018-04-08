import { IUser } from "../interfaces/IUser";
import { Module } from "vuex";
import { messageService } from "../dataServices/messageService";

export const messageStore: Module<any, any> = {
    namespaced: true,
    state: {
        messages: []
    },
    actions: {
        Get: (context, login) => {
            return new Promise((resolve, reject) =>
                messageService.Get()
                    .then((data) => {
                        context.commit('UpdateMessages', data);
                        resolve(data);
                    })
                    .catch(() => {
                        context.commit('UpdateFailStatus', true);
                        reject();
                    }));
        }
    },
    mutations: {
        UpdateMessages: (state, messages) => {
            state.messages = messages;
        }
    }
}
