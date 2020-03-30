import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up-component',
  templateUrl: './sign-up-component.component.html',
  styleUrls: ['./sign-up-component.component.less']
})
export class SignUpComponentComponent implements OnInit {

  signUpForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: string;
  success: string;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      likes: [''],
    });
  }

  get signUpFormControls() { return this.signUpForm.controls; }

  onSubmit() {}

  get email() { return this.signUpForm.get('email') as FormControl; }
  // get confirmEmail() { return this.signUpForm.get('emailGroup.confirmEmail') as FormControl; }
  get password() { return this.signUpForm.get('password') as FormControl; }
  get confirmPassword() { return this.signUpForm.get('confirmPassword') as FormControl; }
  get firstName() { return this.signUpForm.get('firstName') as FormControl; }
  get lastName() { return this.signUpForm.get('lastName') as FormControl; }
  get likes() { return this.signUpForm.get('likes') as FormControl; }
  // get businessName() { return this.signUpForm.get('accountForm.businessName') as FormControl; }
  // get terms() { return this.signUpForm.get('accountForm.isTermAccepted') as FormControl; }
  // get zipCode() { return this.signUpForm.get('accountForm.zipCode') as FormControl; }
  // get businessPhone() { return this.signUpForm.get('accountForm.businessPhone') as FormControl; }
}
