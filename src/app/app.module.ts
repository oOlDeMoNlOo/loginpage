import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {LoginpageModule} from './mymodules/loginpage/loginpage.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        LoginpageModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
