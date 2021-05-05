import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';


const routes: Routes = [{ path: '', component: NavegacionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPortafolioRoutingModule {}
