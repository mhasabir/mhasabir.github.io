import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableConfig } from 'src/app/plugins/table/table.model';
import { HttpLocalClientService } from 'src/app/services/http-local-client.service';

class CampaignUrls {
  static Default = `/api/Campaign`;
  static Pagination = `/api/Campaign/Pagination`;
}

@Injectable()
export class CampaignService {

  constructor(private http: HttpLocalClientService) { }

  //#region Campaign Controller
  get(): Observable<any> {
    const url = `${CampaignUrls.Default}`;
    return this.http.get(url);
  }
  getPaginationData(requestBody: TableConfig.IRequestBody): Observable<any> {
    const url = `${CampaignUrls.Pagination}`;
    return this.http.getByQueryParams(url, requestBody);
  }
  getById(id: number): Observable<any> {
    const url = `${CampaignUrls.Default}/${id}`;
    return this.http.get(url);
  }
  post(model: any): Observable<any> {
    const url = `${CampaignUrls.Default}`;
    return this.http.post(url, model);
  }
  put(model: any): Observable<any> {
    const url = `${CampaignUrls.Default}`;
    return this.http.put(url, model);
  }
  delete(id: number): Observable<any> {
    const url = `${CampaignUrls.Default}/${id}`;
    return this.http.delete(url);
  }
  //#endregion
}
