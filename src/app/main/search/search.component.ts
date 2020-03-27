import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiDataService } from '../../shared-components/api-data/api-data.service';
import { faSearch, faTimes, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { DiagnoseData } from '../../shared-components/interfaces';
import {
  DefaultLanguage,
  DefaultClientId,
  DefaultContentType,
  DefaultSearchText
} from 'src/constants'

@Component({
  selector: 'app-main-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
  faSearch = faSearch;
  faTimes = faTimes;
  faEllipsisH = faEllipsisH;
  closeSearch = 1;
  dataValues: DiagnoseData = {
    clientId: DefaultClientId,
    language: DefaultLanguage,
    contentType: DefaultContentType,
    text: DefaultSearchText
  }
  text: string;

  constructor(private apiDataService: ApiDataService){}

  ngOnInit() {
    this.clientIdSubscribtion();
    this.languageSubscribtion();
    this.contentTypeSubscribtion();
  }

  clientIdSubscribtion(): void {
    this.apiDataService.getClientId().subscribe(clientId => {
      if (clientId) { this.dataValues.clientId = clientId; }
    });
  };

  languageSubscribtion(): void {
    this.apiDataService.getLanguage().subscribe(language => {
      if (language) { this.dataValues.language = language; }
    });
  };

  contentTypeSubscribtion(): void {
    this.apiDataService.getContentType().subscribe(contentType => {
      if (contentType) { this.dataValues.contentType = contentType; }
    });
  };

  inputSearchData(text): void {
    this.dataValues.text = text;

    this.apiDataService.searchText(this.dataValues);
    this.apiDataService.dataRequestForRefresh(this.dataValues);
  }

}
