import { PagAjustesPage } from './../pages/pag-ajustes/pag-ajustes';
import { PagFavoritosPage } from './../pages/pag-favoritos/pag-favoritos';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PagChaquetasPage } from '../pages/pag-chaquetas/pag-chaquetas';
import { PagJerseyPage } from '../pages/pag-jersey/pag-jersey';
import { PagChaq1Page } from '../pages/pag-chaquetas/pag-chaqueta1/pag-chaq1';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PagFavoritosPage,
    PagAjustesPage,
    PagChaquetasPage,
    PagChaq1Page,
    PagJerseyPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PagFavoritosPage,
    PagAjustesPage,
    PagChaquetasPage,
    PagChaq1Page,
    PagJerseyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {
}



