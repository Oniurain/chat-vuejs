import { IUser } from "../interfaces/IUser";
import { Module } from "vuex";
import { messageService } from "../dataServices/messageService";
import { IMessageInformation } from "../interfaces/IMessageInformation";
const MESSAGE_COUNT = 3;

export const messageStore: Module<any, any> = {
    namespaced: true,
    state: {
        messages: [],
        firstIndexLoaded: null
    },
    actions: {
        Get: (context, isPrevious) => {
            return new Promise((resolve, reject) =>
                messageService.Get(context.state.firstIndexLoaded, MESSAGE_COUNT)
                    .then((data) => {
                        context.commit('UpdateMessages', { messages: data.messages, isPrevious });
                        context.commit('UpdatePageStatus', data.count);
                        resolve(data);
                    })
            );
        },
        Add: (context, messageInformation: IMessageInformation) => {
            return new Promise((resolve) => {
                messageService.Add(messageInformation).then((data) => {
                    context.commit('UpdateMessages', { messages: data });
                    resolve(data)
                });
            });
        }
    },
    mutations: {
        UpdateMessages: (state, param) => {
            if (param.isPrevious) {
                state.messages = param.messages.concat(state.messages);
            }
            else {
                state.messages = state.messages.concat(param.messages);
            }
        },
        UpdatePageStatus: (state, messagesCount) => {
            state.firstIndexLoaded = messagesCount - state.messages.length;
        }
    }
}
