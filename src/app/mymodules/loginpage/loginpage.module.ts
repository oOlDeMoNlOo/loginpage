import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginpageComponent} from './loginpage.component';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatProgressBarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginPageService} from './loginpage.service';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        MatProgressBarModule,
        MatCardModule
    ],
    declarations: [
        LoginpageComponent
    ],
    providers: [LoginPageService],
    exports: [LoginpageComponent]
})
export class LoginpageModule {
}
