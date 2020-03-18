import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { UserService } from 'src/app/shared-components/user.service';
import { DiagnoseData } from '../interfaces';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  private URL: string = environment.apiBaseUrl;
  private inputText = new Subject<any>();
  private data = new Subject<any>();

  public diagnoseData: DiagnoseData = {
    clientId: 60,
    language: 'en',
    text: 'I really love scrambled eggs.  They are the Shiiiiit.',
    contentType: 'SHORT_TEXT'
  };

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  getData(): Observable<any> {
    return this.data.asObservable();
  }

  postData(text: string) {
    this.inputText.next({ text });
    this.http.post(`${this.URL}/classify/text`, this.diagnoseData).subscribe( res => {
      console.log('res service post data', res)
      this.data.next(res);
    });
  }

  clearData(): void {
    this.inputText.next();
  };

  getText(): Observable<any> {
    return this.inputText.asObservable();
  };

}
