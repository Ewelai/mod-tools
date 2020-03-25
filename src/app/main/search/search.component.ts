import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiDataService } from '../../shared-components/api-data/api-data.service';
import { faSearch, faTimes, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { DiagnoseData } from '../../shared-components/interfaces';
import {
  DefaultLanguage,
  DefaultClient,
  DefaultContentType,
  DefaultSearchText
} from 'src/constants'

@Component({
  selector: 'main-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
  faSearch = faSearch;
  faTimes = faTimes;
  faEllipsisH = faEllipsisH;
  closeSearch = 1;
  clientId: number;
  language: string;
  contentType: string;
  text: string;

  constructor(private apiDataService: ApiDataService){}

  ngOnInit() {
    this.clientIdSubscribtion();
    this.languageSubscribtion();
    this.contentTypeSubscribtion();
  }

  clientIdSubscribtion() {
    this.apiDataService.getClientId().subscribe(clientId => {
      if (clientId) { this.clientId = clientId; }
    });
  };

  languageSubscribtion() {
    this.apiDataService.getLanguage().subscribe(language => {
      if (language) { this.language = language; }
    });
  };

  contentTypeSubscribtion() {
    this.apiDataService.getContentType().subscribe(contentType => {
      if (contentType) { this.contentType = contentType; }
    });
  };

  inputSearchData(text) {
    const data: DiagnoseData = {
      clientId: this.clientId ? this.clientId : DefaultClient,
      language: this.language ? this.language : DefaultLanguage,
      text: this.text ? this.text : DefaultSearchText,
      contentType: this.contentType ? this.contentType : DefaultContentType
    }
    this.apiDataService.searchText(data);
    this.apiDataService.dataRequestForRefresh(data);
  }

}
