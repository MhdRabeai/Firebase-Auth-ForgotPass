import {
  Auth,
  sendEmailVerification,
  sendPasswordResetEmail,
  signOut,
} from '@angular/fire/auth';
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
      .then((res) => {
        alert('User Logged In Successfully!!');
        localStorage.setItem('token', 'true');

        // If User Is Been Verified User
        if (res.user.emailVerified == true) {
          this.router.navigate(['/home']);
        }
        // Before User Is Been Verified
        else {
          this.router.navigate(['/verify-email']);
        }
      })
      .catch((err) => {
        alert(err.message);
        this.router.navigate(['/login']);
      });
  }
  signup(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((res) => {
        // Signed up

        alert('User Registred Successfully!!');

        //After Signup send an email for verification
        this.emailverify(res.user);

        this.router.navigate(['/login']);
      })
      .catch((err) => {
        alert(err.message);
        this.router.navigate(['/signup']);
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

  // Email Verification
  emailverify(user: any) {
    return sendEmailVerification(user).then(
      () => {
        this.router.navigate(['/verify-email']);
      },
      () => {
        alert('Somethig Went Wrong');
      }
    );
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
}
