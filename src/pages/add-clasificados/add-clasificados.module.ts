import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddClasificadosPage } from './add-clasificados';

@NgModule({
  declarations: [
    AddClasificadosPage,
  ],
  imports: [
    IonicPageModule.forChild(AddClasificadosPage),
  ],
})
export class AddClasificadosPageModule {}
