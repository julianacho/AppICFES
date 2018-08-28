import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, AlertController } from 'ionic-angular';
import { AddClasificadosPage } from '../add-clasificados/add-clasificados';
import { SocialSharing } from '@ionic-native/social-sharing';

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
    public alertCtrl: AlertController, public modalCtrl: ModalController,
    private socialSharing: SocialSharing) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClasificadosPage');
  }

  showAlert(nombre: String, email: String, celular: String) {
    let dat;
    dat = '<strong>Nombre:</strong>' + nombre + '<br><strong>Telefono:</strong> ' + celular + '<br><strong>Email:</strong> ' + email;
    const alert = this.alertCtrl.create({
      title: 'Contacto',
      message: dat,
      buttons: ['OK'],
    });
    alert.present();
  }

  showAdd() {
    const prompt = this.alertCtrl.create({
      title: 'Nuevo Clasificado',
      message: "Registre el nuevo clasificado que desea añadir",
      inputs: [
        {
          name: 'Titulo',
          placeholder: 'Titulo'
        },
        {
          name: 'Descripción',
          placeholder: 'Descripción'
        },
        {
          name: 'Valor',
          placeholder: 'valor'
        },
      ],
      buttons: [
        {
          text: 'Cargar Imagen',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Guardar',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  openModalAdicionarClasificado() {

    let modal = this.modalCtrl.create(AddClasificadosPage);
    modal.present();
  }

  enviarwhatapp() {
       
    this.socialSharing.shareViaWhatsAppToReceiver('+573107332096', 'Buenas, me interesa su publicacion.', '','').then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });

  }

  

}
