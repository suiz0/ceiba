import { Injectable } from '@angular/core';

import { Entry } from '../../app/entry';
import { Entries } from '../../app/mock.entries';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EntriesService  {
    public get(): Observable<Entry[]> {
      return Observable.create( observer => {
        observer.next( Entries );
      } );
    }
}
