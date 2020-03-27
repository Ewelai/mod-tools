import { Component, OnInit } from '@angular/core';
import { ApiDataService } from 'src/app/shared-components/api-data/api-data.service';

@Component({
  selector: 'app-deeper-analysis-toggler',
  templateUrl: './deeper-analysis-toggler.component.html',
  styleUrls: ['./deeper-analysis-toggler.component.less']
})
export class DeeperAnalysisTogglerComponent implements OnInit {
  isChecked = false;

  constructor(public apiDataSevice: ApiDataService) { }

  ngOnInit(): void {
  }

  toggle(): void {
    this.isChecked = !this.isChecked;
    this.apiDataSevice.updateTogglerState(this.isChecked);
  }
}
