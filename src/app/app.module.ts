import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { InscriptionPageModule } from './inscription/inscription.module';
import { AuthService } from './auth.service';
import { AngularFireModule } from '@angular/fire/compat';
import { FirestoreModule } from '@angular/fire/firestore';
import { MatchListComponent } from './components/match-list/match-list.component';
import { RouterModule } from '@angular/router';
import { StatusBar } from '@capacitor/status-bar';
import { HttpClientModule } from '@angular/common/http';

const firebaseConfig = {
  apiKey: "AIzaSyBTrLIX5ssz_ly_RAzpP7mcrj3j4mz9QbI",
  authDomain: "ybet-85530.firebaseapp.com",
  databaseURL: "https://ybet-85530-default-rtdb.firebaseio.com",
  projectId: "ybet-85530",
  storageBucket: "ybet-85530.appspot.com",
  messagingSenderId: "214318912231",
  appId: "1:214318912231:web:cbc0ea343068c458db0842",
  measurementId: "G-VEC3FVHFJ1"
};


@NgModule({
  declarations: [AppComponent, MatchListComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    RouterModule,
    InscriptionPageModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FirestoreModule,
    HttpClientModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
],
  bootstrap: [AppComponent],
})
export class AppModule {}
