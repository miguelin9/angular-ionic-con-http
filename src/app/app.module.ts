import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpClientModule } from '@angular/common/http';
import { TiendaService } from '../providers/tienda-service/tienda-service';

const firebaseConfig = {
  apiKey: "AIzaSyAPKD-1mkwcUtpca_x1k1RyuzX-Wed7hTs",
  authDomain: "tiendaionic.firebaseapp.com",
  databaseURL: "https://tiendaionic.firebaseio.com",
  projectId: "tiendaionic",
  storageBucket: "",
  messagingSenderId: "86418587421"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TiendaService
  ]
})
export class AppModule {}
