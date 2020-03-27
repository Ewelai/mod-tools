import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared-components/user.service';
import { User } from 'src/app/shared-components/user';
import { ApiDataService } from 'src/app/shared-components/api-data/api-data.service';

@Component({
  selector: 'app-generic-view',
  templateUrl: './generic-view.component.html',
  styleUrls: ['./generic-view.component.less']
})
export class GenericViewComponent implements OnInit {
  contentType: string;
  clientId: number;
  text: string;
  user: User
  response: any;

  constructor(
    public userService: UserService,
    public apiDataService: ApiDataService
  ) { }

  async ngOnInit() {
    this.user = await this.userService.me();
    this.getData();
  }

  /*
  *  This code below smells  bad.
  *  ```const prefs = this.userService.preferences;
  *  prefs.lastClientId = newClient;
  *  this.userService.preferences = prefs;```
  *
  * In user service we have getter and setter to set value through setter or get it from into the service.
  * Setter have checks about prefs, else set and get default values.
  *
  */

  onUserChangedClient (newClientId:number): void {
    // TODO #codereview This smells bad.
    // Oughtn't I be able to write this as this.UserService.preferences.language = newClient?
    this.userService.preferences.lastClientId = newClientId;
  }

  onUserChangedLanguage (newLanguage:string): void {
    // TODO #codereview This smells bad.
    // Oughtn't I be able to write this as this.UserService.preferences.language = newLanguage?
    this.userService.preferences.language = newLanguage;
  }

  onUserChangedContentType (newContentType: string): void {
    // TODO #codereview This smells bad.
    // Oughtn't I be able to write this as this.UserService.preferences.contentType = newContentType?
    this.userService.preferences.contentType = newContentType;
  }

  getData(): void {
    this.apiDataService.getApiResponse().subscribe(data => {
      if(data !== null){
        this.response = data;
      }
    })
  }

}
