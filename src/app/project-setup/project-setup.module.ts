import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectSetupRoutingModule } from './project-setup-routing.module';
import { CustomMaterialModule, CustomDirectivesModule } from '../shared';
import { ProjectSetupComponent } from './project-setup.component';
import { ProjectSetupListComponent } from '../project-setup/project-setup-list/project-setup-list.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectSetupRoutingModule,
    CustomMaterialModule,
    CustomDirectivesModule
  ],
  declarations: [ProjectSetupComponent, ProjectSetupListComponent]
})
export class ProjectSetupModule { }
