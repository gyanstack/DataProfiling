import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'projectSetup',
        loadChildren: './project-setup/project-setup.module#ProjectSetupModule'
    },
    {
        path: 'metrics',
        loadChildren: './metrics/metrics.module#MetricsModule'
    },
    {
        path: 'rules',
        loadChildren: './rules/rules.module#RulesModule'
    },
    {
        path: 'createManageGroups',
        loadChildren: './create-manage-groups/create-manage-groups.module#CreateManageGroupsModule'
    },
    {
        path: '',
        redirectTo: 'metrics',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
