import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {LoginPageService} from './loginpage.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-loginpage',
    templateUrl: './loginpage.component.html',
    styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
    invalid: boolean;
    loading: boolean;
    form: FormGroup;

    constructor(private service: LoginPageService) {
    }

    ngOnInit() {
        this.form = new FormGroup({
            login: new FormControl('', [Validators.required, Validators.minLength(4)]),
            password: new FormControl('', [Validators.required, Validators.minLength(4)]),
            remember: new FormControl('')
        });

    }

    removeInvalid() {
        if (this.invalid) {
            delete this.invalid;
        }
    }

    onSubmit() {
        this.loading = true;
        this.service.login(this.form.value['login'], this.form.value['password'], this.form.value['remember'])
            .subscribe(value => {
                delete this.loading;
                this.invalid = !value.status;
            }, (reason => {
            delete this.loading;
            this.invalid = !reason.status;
        }));
    }


}
