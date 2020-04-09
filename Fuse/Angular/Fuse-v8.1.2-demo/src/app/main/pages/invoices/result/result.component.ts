import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { InvoiceService } from 'app/main/pages/invoices/invoice.service';

@Component({
    selector     : 'invoice-result',
    templateUrl  : './result.component.html',
    styleUrls    : ['./result.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class InvoiceResultComponent implements OnInit, OnDestroy
{
    invoice: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    constructor(
        private _invoiceService: InvoiceService
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this._invoiceService.invoiceOnChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((invoice) => {
                this.invoice = invoice;
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
