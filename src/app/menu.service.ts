import { Subject, Observable } from 'rxjs';

export class MenuService {

  private _closeAction: Subject<any> =  new Subject<any>();
  public closeEmitted = this._closeAction.asObservable();

  public close() {
    this._closeAction.next( true );
  }
}
