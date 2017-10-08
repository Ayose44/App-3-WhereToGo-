import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {EventosdetallePage} from '../eventosdetalle/eventosdetalle';

/*
  Generated class for the Eventos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html'
})
export class EventosPage {

	pages: Array<{title: string, component: any}>;
	items = [
    'Pokémon Yellow',
    'Super Metroid',
    'Mega Man X',
    'The Legend of Zelda',
    'Pac-Man',
    'Super Mario World' 
  ];
	
  constructor(public navCtrl: NavController, public navParams: NavParams) {
	 
  }


  goToOtherPage() {
    	this.navCtrl.push(EventosdetallePage);
  	}
  
  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
  
  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad EventosPage');
  }

}
