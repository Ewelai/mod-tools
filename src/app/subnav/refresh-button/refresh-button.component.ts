import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../../shared-components/api-data/api-data.service';

@Component({
  selector: 'app-refresh-button',
  templateUrl: './refresh-button.component.html',
  styleUrls: ['./refresh-button.component.less']
})
export class RefreshButtonComponent implements OnInit {
  public data;

  constructor(private apiDataService: ApiDataService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.apiDataService.getDataRequest().subscribe(data => {
      this.data = data;
    });
  }

  refreshData() {
    if(this.data) {
      this.apiDataService.searchText(this.data);
    }
  }
}
