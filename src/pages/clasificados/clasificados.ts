import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the ClasificadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clasificados',
  templateUrl: 'clasificados.html',
})
export class ClasificadosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClasificadosPage');
  }

  showAlert(nombre: String, email:String, celular:String) {
    let dat;
    dat='<strong>Nombre:</strong>'+nombre+'<br><strong>Telefono:</strong> '+celular+ '<br><strong>Email:</strong> '+email;
    const alert = this.alertCtrl.create({
      title: 'Contacto',
      message: dat,
      buttons: ['OK'],
    });
    alert.present();
  }

}
