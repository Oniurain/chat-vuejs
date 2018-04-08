import { IMessageInformation } from '../interfaces/IMessageInformation';

class MessageService {
    private readonly API_URL = '/api/message';
    private MESSAGES: Array<IMessageInformation> = [
        { Id: 1, Author: "Basque", CreationDate: new Date("01/01/2011"), Message: "Ping" },
        { Id: 2, Author: "Basque", CreationDate: new Date("02/01/2011"), Message: "Ping" },
        { Id: 3, Author: "Onigiri", CreationDate: new Date("03/01/2011"), Message: "Pong" },
        { Id: 4, Author: "Basque", CreationDate: new Date("04/01/2011"), Message: "Ping" },
        { Id: 5, Author: "Onigiri", CreationDate: new Date("05/01/2011"), Message: "1-0" },
        { Id: 6, Author: "Basque", CreationDate: new Date("06/01/2011"), Message: "Ping" },
        { Id: 999, Author: "Onigiri", CreationDate: new Date("07/01/2011"), Message: "1-1" }
    ];
    Get = () => {
        return new Promise((resolve, reject) => {
            resolve(this.MESSAGES);
        });
    }
}

export const messageService = new MessageService();
