import { Injectable } from '@angular/core';
import { BaseHttpService } from '../base-http/base-http.service';
import { GetAccessData } from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class GetAccessService {
  private readonly _lead = '/lead';

  constructor(private _http: BaseHttpService) {}

  public getAccess(data: GetAccessData) {
    return this._http.post(this._lead, { ...data });
  }
}
