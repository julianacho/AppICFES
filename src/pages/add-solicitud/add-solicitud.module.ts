import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSolicitudPage } from './add-solicitud';

@NgModule({
  declarations: [
    AddSolicitudPage,
  ],
  imports: [
    IonicPageModule.forChild(AddSolicitudPage),
  ],
})
export class AddSolicitudPageModule {}
