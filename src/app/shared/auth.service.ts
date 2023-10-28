import { Auth, sendPasswordResetEmail, signOut } from '@angular/fire/auth';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private auth: Auth) {}

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then(() => {
        alert('User Logged In Successfully!!');
        localStorage.setItem('token', 'true');
        this.router.navigate(['/home']);
      })
      .catch((err) => {
        alert(err.message);
        this.router.navigate(['/login']);
      });
  }
  signup(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then(() => {
        // Signed up
        alert('User Registred Successfully!!');
        this.router.navigate(['/login']);
      })
      .catch((err) => {
        alert(err.message);
        this.router.navigate(['/signup']);
      });
  }
  signout() {
    return signOut(this.auth)
      .then(() => {
        // Sign-out successful.
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  forgotPass(email: any) {
    return sendPasswordResetEmail(this.auth, email)
      .then(() => {
        this.router.navigate(['/verify-email']);
      })
      .catch((err) => {
        alert(err.message);
      });
  }
}
