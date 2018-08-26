import { Component  } from '@angular/core';
import {ModalController,  NavController, NavParams,AlertController } from 'ionic-angular';
import { EvaluacionPage} from '../evaluacion/evaluacion'

/**
 * Generated class for the CapacitacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-capacitaciones',
  templateUrl: 'capacitaciones.html',
})
export class CapacitacionesPage {

  pet: string = "puppies";

  constructor(public navCtrl: NavController,public alertCtrl: AlertController,
    public modalCtrl: ModalController) {

  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Cancelar  inscripción',
      message: '¿Esta seguro que desea cancelar la inscripción?',
      buttons: [
        {
          text: 'Si',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  showConfirmInsrcibir() {
    const confirm = this.alertCtrl.create({
      title: 'Realizar  inscripción',
      message: '¿Esta seguro que desea incribirse a la inscripción?',
      buttons: [
        {
          text: 'Si',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  showDetail() {
    let dat;
    dat='<strong>Lugar:</strong>Universidad del bosque<br><strong>Fecha y Hora:</strong>28 Agoto 2018, 9 a 12 am <br><strong>Direccion:</strong>Diagonal 9 No 83-02<br><br><strong>Descripcion:</strong><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia odit ab impedit quam necessitatibus non veritatis inventore aliquid voluptates veniam ullam saepe ipsa error, eaque neque. Voluptatibus odit inventore saepe!</td>';
    const alert = this.alertCtrl.create({
      title: 'Información capacitacion',
      message: dat,
      buttons: ['OK'],
    });
    alert.present();
  }

  openModalCalificacion() {

    let modal = this.modalCtrl.create(EvaluacionPage);
    modal.present();
  }

}
