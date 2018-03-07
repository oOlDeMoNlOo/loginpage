import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {LoginpageComponent} from './loginpage/loginpage.component';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginServiceService} from './login-service.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatInputModule} from '@angular/material';

@NgModule({
    declarations: [
        AppComponent,
        LoginpageComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatInputModule
    ],
    providers: [LoginServiceService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
