import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexPortafolioRoutingModule } from './index-portafolio-routing.module';
import { IndexPortafolioComponent } from './componentes/index/index-portafolio.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [IndexPortafolioComponent, NavegacionComponent],
  imports: [CommonModule, IndexPortafolioRoutingModule, MaterialModule],
  exports: [IndexPortafolioComponent, NavegacionComponent],
})

export class IndexPortafolioModule { }
