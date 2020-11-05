import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Api } from '../api/api';

@Injectable()
export class User {

  register : any = 'Authentication/Register';
  loginUrl : any = 'Authentication/Login';
  socialLoginUrl : any = 'Authentication/SocialLogin';
  forgot_pass : any = 'Authentication/forgot_pass';

  constructor(public api: Api) { }

  login(data: any) {
    let seq = this.api.post(this.loginUrl, data).share();
    return seq;
  }

  socialLogin(data: any) {
    let seq = this.api.post(this.socialLoginUrl, data).share();
    return seq;
  }

  signup(accountInfo: any) {
    let seq = this.api.post(this.register, accountInfo).share();
    return seq;
  }

  forgotPassword(accountInfo: any) {
    let seq = this.api.post(this.forgot_pass, accountInfo).share();
    return seq;
  }


}
