import { Component, OnInit, Input } from '@angular/core';
import { ApiDataService } from 'src/app/shared-components/api-data/api-data.service';

@Component({
  selector: 'app-diagnose-text-view',
  templateUrl: './diagnose-text-view.component.html',
  styleUrls: ['./diagnose-text-view.component.less']
})
export class DiagnoseTextViewComponent implements OnInit {
  isShow: any;
  mouseValue: any;
  @Input() response;
  test: string;

  constructor(public apiDataService: ApiDataService) { }

  ngOnInit(): void {
  }

  mouseEnter(index, item) {
    if(item.solution === '{{breakfast_food}}') {
      this.mouseValue = index;
    }
  }

  mouseLeave(item) {
    if(item.solution === '{{breakfast_food}}') {
      this.mouseValue = '';
    }
  }

  checkRightSolution(condition) {
    if((condition !== '{{strong_bully_word}}') && (condition !== '{{stem:love}}') && (condition !== '{{breakfast_food}}')) {
      return true;
    }
  }

  checkNeutralSolutions(condition) {
    if((condition === '{{stem:love}}') || (condition === '{{breakfast_food}}')) {
      return true;
    }
  }


}
