import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  email: any = '';
  password: any = '';
  constructor(private auth: AuthService) {}
  ngOnInit(): void {}
  signup() {
    if (this.email == '') {
      alert('You Have To Enter Email');
      return;
    }
    if (this.password == '') {
      alert('You Have To Enter Password');
      return;
    }
    this.auth.signup(this.email, this.password);
    this.email = '';
    this.password = '';
  }
}
