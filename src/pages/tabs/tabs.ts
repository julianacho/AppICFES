import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { CapacitacionesPage } from '../capacitaciones/capacitaciones';
import { ActividadesPage } from '../actividades/actividades';
import { SolicitudesPage } from '../solicitudes/solicitudes';
import { ClasificadosPage } from '../clasificados/clasificados';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CapacitacionesPage;
  tab3Root = ActividadesPage;
  tab4Root = SolicitudesPage;
  tab5Root = ClasificadosPage;

  constructor() {

  }
}
