import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.scss'],
})
export class ForgotPassComponent {
  email: string = '';
  constructor(private auth: AuthService) {}
  sendLink() {
    this.auth.forgotPass(this.email);
    this.email = '';
  }
}
