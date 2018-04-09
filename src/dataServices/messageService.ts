import { IMessageInformation } from '../interfaces/IMessageInformation';
import { IMessageInformations } from '../interfaces/IMessageInformations';

class MessageService {
    private readonly API_URL = '/api/message';
    private MESSAGES: Array<IMessageInformation> = [
        { id: 1, author: "Basque", creationDate: new Date("01/01/2011"), message: "1" },
        { id: 2, author: "Basque", creationDate: new Date("02/01/2011"), message: "2" },
        { id: 3, author: "Onigiri", creationDate: new Date("03/01/2011"), message: "3" },
        { id: 4, author: "Basque", creationDate: new Date("04/01/2011"), message: "4" },
        { id: 5, author: "Onigiri", creationDate: new Date("05/01/2011"), message: "5" },
        { id: 6, author: "Basque", creationDate: new Date("06/01/2011"), message: "6" },
        { id: 999, author: "Onigiri", creationDate: new Date("07/01/2011"), message: "7" }
    ];
    Get = (firstIndexLoaded: number | null, count: number) => {
        return new Promise<IMessageInformations>((resolve, reject) => {
            firstIndexLoaded = firstIndexLoaded || this.MESSAGES.length;
            const firstIndex = Math.max(0, firstIndexLoaded - count);
            resolve({ messages: this.MESSAGES.slice(firstIndex, firstIndexLoaded), count: this.MESSAGES.length });
        });
    }
    Add(message: IMessageInformation) {
        return new Promise((resolve) => {
            message.id = this.MESSAGES[this.MESSAGES.length - 1].id + 1;
            this.MESSAGES.push(message);
            resolve(message);
        });
    }
}

export const messageService = new MessageService();
