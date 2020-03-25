import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ApiDataService } from 'src/app/shared-components/api-data/api-data.service';

@Component({
  selector: 'app-deeper-analysis-toggler',
  templateUrl: './deeper-analysis-toggler.component.html',
  styleUrls: ['./deeper-analysis-toggler.component.less']
})
export class DeeperAnalysisTogglerComponent implements OnInit {

  @Input() isChecked = true;
  @Output() changeToggle = new EventEmitter<boolean>();

  constructor(public apiDataSevice: ApiDataService) { }

  ngOnInit(): void {
  }

  onChangeToggle() {
    console.log('deeper analysis', this.isChecked)
    this.changeToggle.emit(this.isChecked);
    this.apiDataSevice.updateTogglerState(this.isChecked);
  }

}
