import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, AlertController } from 'ionic-angular';
import { AddClasificadosPage } from '../add-clasificados/add-clasificados';
import { AddSolicitudPage } from '../add-solicitud/add-solicitud';

/**
 * Generated class for the SolicitudesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-solicitudes',
  templateUrl: 'solicitudes.html',
})
export class SolicitudesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController, public modalCtrl: ModalController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SolicitudesPage');
  }

  openModalAdicionarClasificado() {

    let modal = this.modalCtrl.create(AddSolicitudPage);
    modal.present();
  }

}
