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
  isChecked = false;
  user: User

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

    console.log('changed Client', prefs)
  }

  onUserChangedLanguage (newLanguage:string) {
    // TODO #codereview This smells bad.
    // Oughtn't I be able to write this as this.UserService.preferences.language = newLanguage?
    const prefs = this.UserService.preferences;
    prefs.language = newLanguage;
    this.UserService.preferences = prefs;

    console.log('changed Language', prefs)
  }

  onUserChangedContentType (newContentType: string) {
    const prefs = this.UserService.preferences;
    prefs.contentType = newContentType;
    this.UserService.preferences = prefs;

    console.log('changed CNT', prefs)
  }

  onChangeAnalysisToggle(event) {
    console.log('event generic-view', event)
  }

}
