import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/shared-components/user.service';
import { User } from 'src/app/shared-components/user';
// import { DefaultContentType, DefaultClient } from 'src/constants';
// import { DiagnoseData } from '../../shared-components/interfaces';
import { ApiDataService } from 'src/app/shared-components/api-data/api-data.service';

@Component({
  selector: 'main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  contentType: string;
  clientId: number;
  text: string;
  user:User

  constructor(
    public UserService:UserService,
    public apiDataService: ApiDataService
  ) { }

  async ngOnInit() {
    this.user = await this.UserService.me();
    // this.subscribeToChangeClientId()
  }

  // subscribeToChangeClientId() {
  //   this.apiDataService.getClientId().subscribe(clientId => {
  //     console.log(clientId)
  //     if(clientId) {
  //       this.clientId = clientId;
  //     }
  //   });
  // }

  // onSearch(text: string) {
  //   const data: DiagnoseData = {
  //     clientId: this.clientId,
  //     language: this.la,
  //     text: text, 
  //     contentType: this.contentType
  //   }
  //   this.apiDataService.searchText(data).subscribe(response => {
      
  //   })
  // }

  onUserChangedClient (newClient:number) {
    // TODO #codereview This smells bad.
    // Oughtn't I be able to write this as this.UserService.preferences.language = newLanguage?
    const prefs = this.UserService.preferences;
    prefs.lastClientId = newClient;
    this.UserService.preferences = prefs;
    console.log('onUserChangedClient', prefs)
  }

  onUserChangedLanguage (newLanguage:string) {
    // TODO #codereview This smells bad.
    // Oughtn't I be able to write this as this.UserService.preferences.language = newLanguage?
    const prefs = this.UserService.preferences;
    prefs.language = newLanguage;
    this.UserService.preferences = prefs;
    console.log('onUserChangedLanguage', prefs)
  }

  onUserChangedContentType (newContentType: string) {
    const prefs = this.UserService.preferences;
    prefs.contentType = newContentType;
    this.UserService.preferences = prefs;
    console.log('onUserChangedContentType', prefs)
  }

}
