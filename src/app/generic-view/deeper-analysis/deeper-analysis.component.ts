import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-deeper-analysis',
  templateUrl: './deeper-analysis.component.html',
  styleUrls: ['./deeper-analysis.component.less']
})
export class DeeperAnalysisComponent implements OnInit {
  @Input() isChecked = true;
  @Output() changeToggle = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  } 

  onChangeToggle(event) {
    console.log('deeper analysis', event)
    this.changeToggle.emit(this.isChecked);
  }

}
