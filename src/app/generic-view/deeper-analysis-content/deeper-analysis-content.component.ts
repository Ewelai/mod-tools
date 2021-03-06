import { Component, OnInit, Input } from '@angular/core';
import { ApiDataService } from 'src/app/shared-components/api-data/api-data.service';
import { Topics } from 'src/constants';

@Component({
  selector: 'app-deeper-analysis-content',
  templateUrl: './deeper-analysis-content.component.html',
  styleUrls: ['./deeper-analysis-content.component.less']
})

export class DeeperAnalysisContentComponent implements OnInit {
  isShowContent = false;
  topics: string[];
  topicsConstant = Topics;
  @Input() response;

  constructor(public apiDataService: ApiDataService) { }

  ngOnInit(): void {
    this.onChangeAnalysisToggle();
    this.getTopics();
  }

  onChangeAnalysisToggle(): void {
    this.apiDataService.getTogglerState().subscribe((state: boolean) => {
      this.isShowContent = state;
    })
  }

  getTopics(): void {
    this.apiDataService.getTopics().subscribe(topics => {
      this.topics = topics;
    });
  }

  checkCondition(item: any, condition: string): boolean {
    if(item.tokens.length > 0 && item.tokens[item.tokens.length - 1].text === condition) {
      return true;
    }
  }
}
