import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {LoginpageComponent} from './loginpage/loginpage.component';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginServiceService} from './login-service.service';

@NgModule({
    declarations: [
        AppComponent,
        LoginpageComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    providers: [LoginServiceService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
