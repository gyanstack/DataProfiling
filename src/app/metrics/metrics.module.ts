import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MetricsRoutingModule } from './metrics-routing.module';
import { MetricsComponent } from './metrics.component';
import { GrainComponent } from './grain/grain.component';
import { DataSliceComponent } from './data-slice/data-slice.component';
import { CustomMaterialModule, CustomDirectivesModule } from '../shared';
import { MetricsListComponent } from './metrics-list/metrics-list.component';
import { GrainListComponent } from './grain/grain-list/grain-list.component';
import { MetricsService } from '../services/metrics.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GrainService } from '../services/grain.service';

@NgModule({
  imports: [
    CommonModule,
    MetricsRoutingModule,
    CustomMaterialModule,
    CustomDirectivesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [MetricsComponent, GrainComponent, DataSliceComponent, MetricsListComponent, GrainListComponent],
  providers: [MetricsService, GrainService]
})
export class MetricsModule { }
