import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeadingComponent } from '../../components/heading/heading.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [HeadingComponent, ReactiveFormsModule, NgIf],
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  userInfo: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) {
    this.userInfo = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngOnInit() {
    this.submitted = false;
  }
  get form() {
    return this.userInfo.controls;
  }
  onSubmit() {
    if (!this.userInfo.valid) {
      return;
      // handle api login
    } else {
    }
    console.log('this.userInfo', this.userInfo.controls);
  }
}

// required
// username: 4 kitu
// password: 5 kitu 

