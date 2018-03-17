import {Injectable} from '@angular/core';
import {ResponseLogin} from './loginpage';

@Injectable()
export class LoginPageService {

    constructor() {
    }

    login(login: string, password: string, remember: boolean): Promise<ResponseLogin> {
        return new Promise(((resolve, reject) => {
            setInterval(() => {
                const rand = Boolean(Math.round(Math.random() * 2));
                if (rand) {
                    resolve({status: rand});
                } else {
                    reject({status: rand, error: 'Данные неверны!'});
                }
            }, 1000);
        }));
    }
}
