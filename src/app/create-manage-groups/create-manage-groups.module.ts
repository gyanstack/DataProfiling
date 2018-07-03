import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateManageGroupsRoutingModule } from './create-manage-groups-routing.module';
import { CreateManageGroupsComponent } from './create-manage-groups.component';
import { CustomMaterialModule, CustomDirectivesModule } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    CreateManageGroupsRoutingModule,
    CustomMaterialModule,
    CustomDirectivesModule
  ],
  declarations: [CreateManageGroupsComponent]
})
export class CreateManageGroupsModule { }
