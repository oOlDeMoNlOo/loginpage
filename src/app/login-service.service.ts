import {Injectable} from '@angular/core';
import {LoginPageSer, ResponseLogin} from './loginpage/login-page';

@Injectable()
export class LoginServiceService implements LoginPageSer {

    constructor() {
    }

    login(login: string, password: string, remember: boolean): Promise<ResponseLogin> {
        return new Promise(((resolve, reject) => {
            setInterval(() => {
                const rand = Boolean(Math.round(Math.random() * 2));
                if (rand) {
                    resolve({status: rand});
                } else {
                    reject({status: rand, error: "Данные неверны!"});
                }
            }, 1000);
        }));
    }
}
