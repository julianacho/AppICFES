import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the AddClasificadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-clasificados',
  templateUrl: 'add-clasificados.html',
})
export class AddClasificadosPage {
  todo = {}
  logForm() {
    console.log(this.todo)
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddClasificadosPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
