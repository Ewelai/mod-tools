import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { DiagnoseData } from '../interfaces';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  private URL: string = environment.apiBaseUrl;
  private data = new BehaviorSubject<any>(null);
  private response = new BehaviorSubject<any>(null);
  private topics = new BehaviorSubject<any>(null);
  private language = new BehaviorSubject<string>(null);
  private clientId = new BehaviorSubject<number>(null);
  private contentType = new BehaviorSubject<string>(null);
  private toggler = new Subject();

  constructor(
    private http: HttpClient
  ) { }

  searchText(request: DiagnoseData) {
    this.http.post(`${this.URL}/classify/text`, request).subscribe(response => {
      console.log(response)
      this.saveApiResponse(response);
    });
  }

  // Topics
  getTopics() {
    return this.topics.asObservable();
  }

  updateTopics(topics) {
    this.topics.next(topics);
  }

  // Toggler for deeper analysis
  getTogglerState() {
    return this.toggler.asObservable();
  }

  updateTogglerState(state) {
    console.log('toggler state service', state)
    this.toggler.next(state);
  }

  // Client data
  getDataRequest() {
    return this.data.asObservable();
  };

  dataRequestForRefresh(data) {
    console.log('data', data)
    this.data.next(data);
  }

  // Response from API
  getApiResponse() {
    return this.response.asObservable();
  }

  saveApiResponse(response) {
    console.log('response', response)
    this.response.next(response);
  }

  // ClientId
  getClientId() {
    return this.clientId.asObservable();
  }

  updateClientId(clientId: number) {
    this.clientId.next(clientId);
  }

  // Content type
  getContentType() {
    return this.contentType.asObservable();
  }

  updateContentType(contentType: string) {
    this.contentType.next(contentType);
  }

  // Language
  getLanguage() {
    return this.language.asObservable();
  }

  updateLanguage(language: string) {
    this.language.next(language);
  }

}
