import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {LoginPageModule} from './mymodules/loginpage/loginpage.module';
import {AppRoutingModule} from './app-routing.module';
import {SocketIoConfig, SocketIoModule} from 'ngx-socket-io';
import {ConfigServer} from './config/server';
import {SocketIoService} from './socket-io.service';

const config: SocketIoConfig = {url: `${ConfigServer.HOST}:${ConfigServer.PORT}`};


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        LoginPageModule,
        AppRoutingModule,
        SocketIoModule.forRoot(config)
    ],
    bootstrap: [AppComponent],
    providers: [SocketIoService]
})
export class AppModule {
}
