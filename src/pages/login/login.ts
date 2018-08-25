import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  correo:string = "";
  contrasena:string = "";  

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl: LoadingController,    
    private alertController:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginUsuario(){

    if(this.correo == "" || this.correo.length==0){
      // Crea una alerta informando el error

          this.alertController.create({
            title:"Error ",
            subTitle:"Ingrese el email",
            buttons: ["OK"]
          }).present()
          return;
    }
    if(this.contrasena == "" || this.contrasena.length==0){      
          this.alertController.create({
            title:"Error ",
            subTitle: "Ingrese Contraseña",
            buttons: ["OK"]
          }).present()
          return;     
    }
    this.navCtrl.setRoot(TabsPage);
    

  }

}
