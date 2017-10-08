import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {Datamembers} from "../providers/datamembers";
import { MensajesPage } from '../pages/mensajes/mensajes';
import { AmigosPage } from '../pages/amigos/amigos';
import { EventosPage } from '../pages/eventos/eventos';
import { GentePage } from '../pages/gente/gente';
import { PerfilPage } from '../pages/perfil/perfil';
import {EventosdetallePage} from '../pages/eventosdetalle/eventosdetalle';
import {Inicio} from '../pages/inicio/inicio';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
	EventosPage,
	PerfilPage,
	MensajesPage,
	AmigosPage,
	GentePage,
	EventosdetallePage,
	Inicio
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
	EventosPage,
	PerfilPage,
	MensajesPage,
	AmigosPage,
	GentePage,
	EventosdetallePage,
	Inicio
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Datamembers]
})
export class AppModule {}
