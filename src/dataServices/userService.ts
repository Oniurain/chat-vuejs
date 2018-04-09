import { IUser } from '../interfaces/IUser';

class UserService {
    private readonly API_URL = '/api/user';
    private USERS: Array<string> = ['Basque'];
    Add = (userInformations: IUser) => {
        return new Promise<IUser>((resolve, reject) => {
            if (this.USERS.every((item) => item !== userInformations.login)) {
                this.USERS.push(userInformations.login);
                resolve({ login: userInformations.login });
            }
            else {
                reject()
            }
        });
    }

    GetAll = () => {
        return new Promise<Array<string>>((resolve) => {
            resolve(this.USERS);
        });
    }
}

export const userService = new UserService();
