import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { DiagnoseData } from '../interfaces';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  private URL: string = environment.apiBaseUrl;
  private data = new BehaviorSubject<any>(null);
  private response = new BehaviorSubject<any>(null)
  private language = new BehaviorSubject<string>(null);
  private clientId = new BehaviorSubject<number>(null);
  private contentType = new BehaviorSubject<string>(null);

  constructor(
    private http: HttpClient
  ) { }

  searchText(request: DiagnoseData) {
    this.http.post(`${this.URL}/classify/text`, request).subscribe(response => {
      this.saveApiResponse(response);
    });
  }

  getDataRequest() {
    return this.data.asObservable();
  };

  getLanguage() {
    return this.language.asObservable();
  }

  getClientId() {
    return this.clientId.asObservable();
  }

  getContentType() {
    return this.contentType.asObservable();
  }

  getApiResponse() {
    return this.response.asObservable();
  }

  dataRequestForRefresh(data) {
    this.data.next(data);
  }

  saveApiResponse(response) {
    this.response.next(response);
  }

  updateClientId(clientId: number) {
    this.clientId.next(clientId);
  }

  updateContentType(contentType: string) {
    this.contentType.next(contentType);
  }

  updateLanguage(language: string) {
    this.language.next(language);
  }

}
