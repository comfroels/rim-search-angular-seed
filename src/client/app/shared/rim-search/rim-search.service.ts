import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class RimSearchService {

    search(term: string) {
        return Observable.create((observer: any) => {
            observer.next({term});
            observer.complete();
        });
    }
}
