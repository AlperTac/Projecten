import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

import { InvoiceService } from 'app/main/pages/invoices/invoice.service';
import { InvoiceResultComponent } from 'app/main/pages/invoices/result/result.component';

const routes = [
    {
        path     : 'invoices/result',
        component: InvoiceResultComponent,
        resolve  : {
            search: InvoiceService
        }
    }
];

@NgModule({
    declarations: [
        InvoiceResultComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        FuseSharedModule
    ],
    providers   : [
        InvoiceService
    ]
})
export class InvoiceResultModule
{
}
