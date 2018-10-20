import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController} from 'ionic-angular';

/**
 * Generated class for the AddSolicitudPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-solicitud',
  templateUrl: 'add-solicitud.html',
})
export class AddSolicitudPage {

  todo = {}
  solicitd:any;
  
  logForm() {
    console.log(this.todo)
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


  


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddSolicitudPage');
  }

}
