import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { MSN } from '../jaydata-model/MSN';
import {MSN_DI_CONFIG } from '../app.config';
import "jaydata/odata";


@Injectable()
export class MSNOdataService {
    private context: MSN.MSNContext;
    private subject: Subject<MSN.MSNContext>;

    private config = {
        provider: MSN_DI_CONFIG.oDataProvider,
        oDataServiceHost: MSN_DI_CONFIG.oDataEndPoint
    };

    constructor() {
        this.subject = new Subject();
        // need to fix this
        new MSN.MSNContext(this.config)
            .onReady()
            .then(context => this.onReady(context));
    }

    getContext(setContext: (context: MSN.MSNContext) => void) {
        if (this.context) {
            setContext(this.context);
        }
        else {
            this.subject.subscribe(setContext);
        }
    }

    private onReady(context: MSN.MSNContext) {
        this.context = context;
        this.subject.next(this.context);
        this.subject.complete();
    }
}