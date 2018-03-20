import {Injectable} from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Md5} from 'ts-md5';
import {Observable} from 'rxjs/Observable';
import {ResponseLogin} from '../../common/response';
import {SocketIoService} from '../../socket-io.service';

@Injectable()
export class LoginPageService {

    private socket: Socket;
    constructor(private socketService: SocketIoService) {
        this.socket = this.socketService.socket;
    }

    login(login: string, password: string, remember: boolean): Observable<ResponseLogin> {
        return new Observable<ResponseLogin>((subscriber => {
          this.socket.once('login', (response: ResponseLogin) => {
            if (!response.status) { subscriber.error(response); }
                subscriber.next(response);
            });
          this.socket.emit('login', {login: login, md5: Md5.hashStr(Md5.hashStr(password).toString())});
        }));
    }
}
