import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {SENDMAIL} from '../../api.config';

@Injectable({
  providedIn: 'root'
})
export class SendMailService {
  constructor(private _http: HttpClient) {
  }

  sendEmail(obj): Observable<any> {
    return this._http.post<any>( SENDMAIL , obj);
  }
}
