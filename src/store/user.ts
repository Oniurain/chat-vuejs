import { IUser } from "../interfaces/IUser";
import { StoreOptions } from "vuex";

export const user: StoreOptions<IUser> = {
    state: {
        login: 'fu'
    },
    getters: {
        login: state => state.login
    }
}
