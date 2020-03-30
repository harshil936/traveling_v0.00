import {AfterContentInit, Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-accounts-page',
  templateUrl: './accounts-page.component.html',
  styleUrls: ['./accounts-page.component.less']
})
export class AccountsPageComponent implements OnInit, AfterContentInit, OnDestroy {

  // constructor() { }

  // ngOnInit() {
  // }
  signupForm: FormGroup;
  signUpErrorMessageSubs: Subscription;
  marketingScriptElement: HTMLScriptElement;

  showMobileUI: boolean;
  showPasswordLink = true;
  showConfirmPasswordLink = true;
  showLoader = false;
  errorMessage = '';
  showTermsAndConditions = false;
  private responsiveSubscription: Subscription;
  // private MatchValidator: any;

  constructor(
  ) { }

  ngOnInit() {
    // let MatchValidator;
    this.signupForm = new FormGroup({
      emailGroup: new FormGroup({
        email: new FormControl('', [ Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,50}$/) ]),
        confirmEmail: new FormControl('', [ Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,50}$/) ])
      }
      // , MatchValidator.validate.bind(this)
      ),
      passwordGroup: new FormGroup({
        password: new FormControl('', [
          Validators.required,
          // MatchValidator.patternValidator(/\d/, { hasNumber: true }),
          // MatchValidator.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
          // MatchValidator.patternValidator(/[a-z]/, { hasSmallCase: true }),
          // this.MatchValidator.patternValidator(/[!@#$%^\&\_\*()\+|~\-=\\`{}\[\]:\?;<>,.\/]/, { hasSpecialCharacters: true }),
          Validators.minLength(8)]),
        confirmPassword: new FormControl('', Validators.required),
      }
      // , MatchValidator.passwordValidate.bind(this)
      ),
      accountForm: new FormGroup({
        firstName: new FormControl('', [ Validators.required, Validators.maxLength(35) ]), // /^(?=.*\d)(?=.*[1-9]).{10}$/
        lastName: new FormControl('', [ Validators.required, Validators.maxLength(35) ]),
        businessName: new FormControl('', [ Validators.required, Validators.maxLength(35) ]),
        isTermAccepted: new FormControl(false, [ Validators.required ]),
        zipCode: new FormControl('', [Validators.required, Validators.pattern(/^(?!0+$)\d{0,}$/)]),
        businessPhone: new FormControl('', [Validators.required])
      })
    });

    // FQ-11043 - enabled validation on confirm pwd and confirm email fields on Mobile device
    // if (this.isMobileDevice) {
    // this.signupForm.get('emailGroup.confirmEmail').setValidators(null);
    // this.signupForm.get('passwordGroup.confirmPassword').setValidators(null);
    // }

  }

  ngAfterContentInit() {
    // this.googleOptimize.activate();
    // this.insertMarketingScript();
  }

  signup(email: string = this.email.value, password: string = this.password.value) {
    if (this.signupForm.valid) {
      this.showLoader = true;
      // const formObj: SignupFields = this.signupForm.get('accountForm').value;
      // formObj.businessPhone = formObj.businessPhone.replace(/[^A-Z0-9]/ig, '');
      // this.signUpErrorMessageSubs = this.signupService.signup(email.toLowerCase(), password, formObj).subscribe((value) => {
      //   this.errorMessage = value;
      //   this.showLoader = false;
      // });
    }
  }

  ngOnDestroy() {
    if (this.signUpErrorMessageSubs) {
      this.signUpErrorMessageSubs.unsubscribe();
    }
    // this.removeMarketingScript();
    this.responsiveSubscription.unsubscribe();
  }

  navigateToTermsAndCondition(evt) {
    if (this.showMobileUI) {
      this.showTermsAndConditions = true;
    } else {
      window.open('/terms-and-conditions', '_blank');
    }
  }

  // shortcuts primarily for template binding
  get email() { return this.signupForm.get('emailGroup.email') as FormControl; }
  get confirmEmail() { return this.signupForm.get('emailGroup.confirmEmail') as FormControl; }
  get password() { return this.signupForm.get('passwordGroup.password') as FormControl; }
  get confirmPassword() { return this.signupForm.get('passwordGroup.confirmPassword') as FormControl; }
  get firstName() { return this.signupForm.get('accountForm.firstName') as FormControl; }
  get lastName() { return this.signupForm.get('accountForm.lastName') as FormControl; }
  get businessName() { return this.signupForm.get('accountForm.businessName') as FormControl; }
  get terms() { return this.signupForm.get('accountForm.isTermAccepted') as FormControl; }
  get zipCode() { return this.signupForm.get('accountForm.zipCode') as FormControl; }
  get businessPhone() { return this.signupForm.get('accountForm.businessPhone') as FormControl; }

  formatPhoneNumber() {
    let val = this.signupForm.get('accountForm.businessPhone').value;
    const regex = new RegExp(/^(?!0+$)[0-9 ()-]*$/gm);
    if (!regex.test(val)) {
      return;
    }
    val = val.replace(/[^0-9]/g, '');
    val = (val.length > 10) ? val.substring(0, 10) : val;
    // if (val !== '') {
    //   val = this.prettyPhoneNumberPipe.transform(val);
    // }
    this.signupForm.get('accountForm.businessPhone').setValue(val);
  }


}
