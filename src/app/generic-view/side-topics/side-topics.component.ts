import { Component, OnInit } from '@angular/core';
import { ApiDataService } from 'src/app/shared-components/api-data/api-data.service';

@Component({
  selector: 'app-side-topics',
  templateUrl: './side-topics.component.html',
  styleUrls: ['./side-topics.component.less']
})
export class SideTopicsComponent implements OnInit {
  response: any;
  topicsResponse: any;

  constructor(public apiDataService: ApiDataService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.apiDataService.getApiResponse().subscribe(data => {
      this.response = data;
      if(data !== null){
        this.response = data;
        this.formatTopics(data.topics)
      }
    })
  }

  formatTopics(topics): void {
    this.topicsResponse = Object.keys(topics);
    this.apiDataService.updateTopics(this.topicsResponse)
  }

}
