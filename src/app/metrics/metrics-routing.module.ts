import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetricsComponent } from './metrics.component';
import { GrainComponent } from './grain/grain.component';
import { DataSliceComponent } from './data-slice/data-slice.component';

const routes: Routes = [
  {
    path: '',
    component: MetricsComponent
  },
  {
    path: 'grain',
    component: GrainComponent
  },
  {
    path: 'data-slice',
    component: DataSliceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MetricsRoutingModule { }
