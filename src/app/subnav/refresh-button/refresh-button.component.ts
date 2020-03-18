import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiDataService } from '../../shared-components/api-data/api-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-refresh-button',
  templateUrl: './refresh-button.component.html',
  styleUrls: ['./refresh-button.component.less']
})
export class RefreshButtonComponent implements OnInit, OnDestroy {
  public data: any;
  public subscription: Subscription;

  constructor(private apiDataService: ApiDataService) { }

  ngOnInit(): void {
    this.getText()
  }

  getText() {
    this.subscription = this.apiDataService.getText().subscribe(data => {
      console.log('data refresh button', data)
      this.data = data;
    });
  }

  refreshData(): void {
    console.log('refresh btn')
    if(this.data){
      console.log(this.data)
      this.apiDataService.postData(this.data);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  };

}
