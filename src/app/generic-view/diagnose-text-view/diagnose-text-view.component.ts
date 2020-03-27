import { Component, OnInit, Input } from '@angular/core';
import { ApiDataService } from 'src/app/shared-components/api-data/api-data.service';

@Component({
  selector: 'app-diagnose-text-view',
  templateUrl: './diagnose-text-view.component.html',
  styleUrls: ['./diagnose-text-view.component.less']
})
export class DiagnoseTextViewComponent implements OnInit {
  @Input() response;
  isShow: boolean;
  mouseValue: string;
  conditions = {
    bully: '{{strong_bully_word}}',
    love: '{{stem:love}}',
    food: '{{breakfast_food}}'
  }

  constructor(public apiDataService: ApiDataService) { }

  ngOnInit(): void {
  }

  mouseEnter(index, item): void {
    if(item.solution === this.conditions.food) {
      this.mouseValue = index;
    }
  }

  mouseLeave(item): void {
    if(item.solution === this.conditions.food) {
      this.mouseValue = '';
    }
  }

  checkBullyCondition(item: any): boolean {
    const tokensText = item.tokens[item.tokens.length - 1].text;
    if(tokensText === this.conditions.bully) {
      return true;
    }
  }

  checkRightCondition(item: any): boolean {
    const tokensText = item.tokens[item.tokens.length - 1].text;
    if(
        (tokensText !== this.conditions.bully) &&
        (tokensText !== this.conditions.love) &&
        (tokensText !== this.conditions.food)
      ) {
      return true;
    }
  }

  checkNeutralCondition(item: any): boolean {
    const tokensText = item.tokens[item.tokens.length - 1].text;
    if((tokensText === this.conditions.love) || (tokensText === this.conditions.food)) {
      return true;
    }
  }


}
