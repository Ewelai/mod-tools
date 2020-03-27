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
      this.saveApiResponse(response);
    });
  }

  /* Topics
  * These methods use BehaviorSubject.
  * To get and update topics for side bar.
  *
  * Method updateTopics used in component side-topic to get access
  * for getTopics in other components.
  *
  * Method getTopics used in deeper-analysis-content component
  * to get access for all topics after sending request to get information.
  * */
  getTopics() {
    return this.topics.asObservable();
  }

  updateTopics(topics) {
    this.topics.next(topics);
  }

  /* Toggler for deeper analysis
  * These methods use Subject.
  * To get access for additional information about spelling and topics.
  *
  * Method updateTogglerState used in app-deeper-analysis-toggler component
  * to follow for state of deeper analysis.
  *
  * Method getTogglerState used in deeper-analysis-content component
  * to get access for show additional information.
  * */
  getTogglerState() {
    return this.toggler.asObservable();
  }

  updateTogglerState(state) {
    this.toggler.next(state);
  }

  /* About client
  * These methods use BehaviorSubject.
  * To get and update client data about language, clientId etc.
  *
  * Method getDataRequest used is refresh-button component
  * to refresh content by creteria on the page.
  *
  * Method dataRequestForRefresh used in search component
  * to set client data for refrehing.
  * */

  getDataRequest() {
    return this.data.asObservable();
  };

  dataRequestForRefresh(data) {
    this.data.next(data);
  }

  /* Response from API
  * These methods use BehaviorSubject.
  * To get and update API response.
  *
  * Method saveApiResponse used for saving result of
  * respons after sending text to API.
  *
  * Method getApiResponse used in generic-view, side-topics
  * components to get saved response.
  * */
  getApiResponse() {
    return this.response.asObservable();
  }

  saveApiResponse(response) {
    this.response.next(response);
  }

  /* ClientId
  * These methods use BehaviorSubject.
  * To get and update clientId for client data request.
  *
  * Method updateClientId used for update
  * client Id from dropdown in client-picker component.
  *
  * Method getClientId used to get client id in search component;
  */
  getClientId() {
    return this.clientId.asObservable();
  }

  updateClientId(clientId: number) {
    this.clientId.next(clientId);
  }

  /* Content type
  * These methods use BehaviorSubject.
  * To get and update content type for client data request.
  *
  * Method updateContentType used for update
  * content type from dropdown in content-type-picker component.
  *
  * Method getContentType used to get content type in search component;
  */
  getContentType() {
    return this.contentType.asObservable();
  }

  updateContentType(contentType: string) {
    this.contentType.next(contentType);
  }

  /* Language
  * These methods use BehaviorSubject.
  * To get and update language for client data request.
  *
  * Method updateLanguage used for update
  * language from dropdown in language-picker component.
  *
  * Method getLanguage used to get language in search component;
  */
  getLanguage() {
    return this.language.asObservable();
  }

  updateLanguage(language: string) {
    this.language.next(language);
  }

}
