import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateManageGroupsComponent } from "./create-manage-groups.component";

const routes: Routes = [
  {
    path: '',
    component: CreateManageGroupsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateManageGroupsRoutingModule { }
