import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabelaComponent } from './tabela/tabela.component';

const appRoutes: Routes = [
    {
        path: '',
        component: TabelaComponent

    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}