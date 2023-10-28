import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: any = '';
  password: any = '';
  constructor(private auth: AuthService) {}
  ngOnInit(): void {}
  login() {
    if (this.email == '') {
      alert('You Have To Enter Email');
      return;
    }
    if (this.password == '') {
      alert('You Have To Enter Password');
      return;
    }
    this.auth.login(this.email, this.password);
    this.email = '';
    this.password = '';
  }
}
