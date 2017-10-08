import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController} from 'ionic-angular';
import {Datamembers} from "../../providers/datamembers";
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { HomePage } from "../home/home";
import { AboutPage } from "../about/about";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
	myForm: FormGroup;
	members: Array<any>;
    loader: any;
    person;
 constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public fb: FormBuilder,
    public data:Datamembers,
    public loadingCtrl:LoadingController
  ) {
    this.myForm = this.fb.group({
  	  'name': ['', [Validators.required]],
      'email': ['', [Validators.required,Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)]],
      'edad': ['', [Validators.required]],
      'password': ['', [Validators.pattern(/^[a-z0-9_-]{6,18}$/)]],
  	});
        this.person = navParams.data.member;

  }
  saveData(){
  	console.log(this.myForm.value);
  }



  public Insert(nom: string, email: string,pass: string,edad: string)
  {
      this.presentLoading();
      this.data.InsertMember(nom,email,pass,edad).subscribe(
        data => {
          this.members = data;
          console.log(data);
            if(this.members[0].result =="success")
            { 
                this.navCtrl.popTo(HomePage);
            }
            this.loader.dismiss();
        },
      
    );

  }
  presentLoading() {
        this.loader = this.loadingCtrl.create({
            content: "Creando cuenta...."
        });
        this.loader.present();

    }


}
