import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../../shared-components/api-data/api-data.service';
import { faSearch, faTimes, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

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

  constructor(private apiDataService: ApiDataService){}

  ngOnInit() {
  }

  inputSearchData(event: any) {
    const data = event.target.value;
    this.apiDataService.postData(data);
  }

}
