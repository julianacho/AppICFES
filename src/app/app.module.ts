import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { CapacitacionesPage } from '../pages/capacitaciones/capacitaciones';
import { ActividadesPage } from '../pages/actividades/actividades';
import { SolicitudesPage } from '../pages/solicitudes/solicitudes';
import { ClasificadosPage } from '../pages/clasificados/clasificados';
import { EvaluacionPage } from '../pages/evaluacion/evaluacion';
import { AddClasificadosPage } from '../pages/add-clasificados/add-clasificados';
import { AddSolicitudPage } from '../pages/add-solicitud/add-solicitud';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SocialSharing } from '@ionic-native/social-sharing';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    CapacitacionesPage,
    ActividadesPage,
    SolicitudesPage,
    ClasificadosPage,
    EvaluacionPage,
    AddClasificadosPage,
    AddSolicitudPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    CapacitacionesPage,
    ActividadesPage,
    SolicitudesPage,
    ClasificadosPage,
    EvaluacionPage,
    AddClasificadosPage,
    AddSolicitudPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
