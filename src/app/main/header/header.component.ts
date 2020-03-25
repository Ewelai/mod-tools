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
  }

  onUserChangedClient (newClient:number) {
    // TODO #codereview This smells bad.
    // Oughtn't I be able to write this as this.UserService.preferences.language = newLanguage?
    const prefs = this.UserService.preferences;
    prefs.lastClientId = newClient;
    this.UserService.preferences = prefs;
  }

  onUserChangedLanguage (newLanguage:string) {
    // TODO #codereview This smells bad.
    // Oughtn't I be able to write this as this.UserService.preferences.language = newLanguage?
    const prefs = this.UserService.preferences;
    prefs.language = newLanguage;
    this.UserService.preferences = prefs;
  }

  onUserChangedContentType (newContentType: string) {
    const prefs = this.UserService.preferences;
    prefs.contentType = newContentType;
    this.UserService.preferences = prefs;
  }

}
