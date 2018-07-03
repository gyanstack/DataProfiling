import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RulesRoutingModule } from './rules-routing.module';
import { RulesComponent } from './rules.component';
import { CustomMaterialModule, CustomDirectivesModule } from '../shared';
import { RuleListComponent } from './rule-list/rule-list.component';

@NgModule({
  imports: [
    CommonModule,
    RulesRoutingModule,
    CustomMaterialModule,
    CustomDirectivesModule
  ],
  declarations: [RulesComponent, RuleListComponent]
})
export class RulesModule { }
