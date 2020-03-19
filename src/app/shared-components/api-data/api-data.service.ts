import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { DiagnoseData } from '../interfaces';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  private URL: string = environment.apiBaseUrl;
  private data = new BehaviorSubject<any>(null);
  private language = new BehaviorSubject<string>(null);
  private clientId = new BehaviorSubject<number>(null);
  private contentType = new BehaviorSubject<string>(null);

  constructor(
    private http: HttpClient
  ) { }

  searchText(request: DiagnoseData) {
    this.http.post(`${this.URL}/classify/text`, request).subscribe(response => {
      console.log(response);
    })
  }

  // clearData(text): void {
  //   this.inputText.next(text);
  // };

  
  getData() {
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

  dataForRefresh(data) {
    this.data.next(data);
  }

  updateClientId(clientId: number) {
    this.clientId.next(clientId);
  }

  updateContentType(contentType: string) {
    this.contentType.next(contentType);
  }

  updateLanguage(language: string) {
    console.log(language)
    this.language.next(language);
  }

}
