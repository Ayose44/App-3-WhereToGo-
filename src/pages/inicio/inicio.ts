import { Component } from '@angular/core';
import {Datamembers} from "../../providers/datamembers";
import { NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class Inicio {
	members: Array<any>;
    loader: any;
    person;
  constructor(public navCtrl: NavController,public navParams: NavParams, public data:Datamembers) {
        this.person = navParams.data.member;
  }

}
