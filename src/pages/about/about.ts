import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController} from 'ionic-angular';
import {Datamembers} from "../../providers/datamembers";
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { HomePage } from "../home/home";
import { ContactPage } from "../contact/contact";
import {AlertController} from  'ionic-angular';
import { Inicio } from '../inicio/inicio';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'

})
export class AboutPage {
	members: Array<any>;
    loader: any;
    person;
  constructor(  public navCtrl: NavController,
    public navParams: NavParams,
    public fb: FormBuilder,
    public data:Datamembers,
    public alertCtrl:AlertController,
    public loadingCtrl:LoadingController) {

  }
  showAlert(){
  let alert = this.alertCtrl.create({
  title: '¡Aviso!',
  subTitle: 'Error, Introduce un correo o una contraseña valida',
  buttons: ['Aceptar']
  });
  alert.present();
  }

   public Iniciar(pass: string, email: string)
  {
      this.data.Iniciar(pass,email).subscribe(
        data => {
          this.members = data;
          console.log(data);
          this.presentLoading();
           if(this.members[0].paco =="" || this.members[0].paco ==null)
            { 
                          this.showAlert();

            } else{
                      this.navCtrl.push(Inicio,{member:data[0]});

            }
        },
       
    );

  }
  presentLoading() {
        this.loader = this.loadingCtrl.create({
            content: "Iniciando sesión...."
        });
        this.loader.present();
        this.loader.dismiss();


    }




}
