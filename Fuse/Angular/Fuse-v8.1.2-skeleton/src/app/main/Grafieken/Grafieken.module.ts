import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { GrafiekenComponent } from './Grafieken.component';

const routes = [
    {
        path     : 'Grafieken',
        component: GrafiekenComponent
    }


];

@NgModule({
    declarations: [
        GrafiekenComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        TranslateModule,

        FuseSharedModule
    ],
    exports     : [
        GrafiekenComponent
    ]
})

export class GrafiekenModule
{
}
