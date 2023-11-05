import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BankInterceptor } from './bank.interceptor';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, provideFirebaseApp(() => initializeApp({"projectId":"banco-e6e96","appId":"1:787992739344:web:324e4c5dfa052b3ddc9495","storageBucket":"banco-e6e96.appspot.com","apiKey":"AIzaSyALYC6dbcRHYRwPqB8KH9FluBu1Q3BSlDo","authDomain":"banco-e6e96.firebaseapp.com","messagingSenderId":"787992739344"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BankInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
