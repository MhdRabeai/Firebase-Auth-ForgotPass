import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { ForgotPassComponent } from './components/forgot-pass/forgot-pass.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ForgotPassComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    VerifyEmailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'myfirebase-b6bc9',
        appId: '1:188629259349:web:809a52a1ebe41eeb4ef0dc',
        storageBucket: 'myfirebase-b6bc9.appspot.com',
        apiKey: 'AIzaSyAZ-Xo57ao1PvvuBMpPJkS5d11K3x4eL9w',
        authDomain: 'myfirebase-b6bc9.firebaseapp.com',
        messagingSenderId: '188629259349',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
