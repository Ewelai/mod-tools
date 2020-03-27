import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ai-prediction',
  templateUrl: './ai-prediction.component.html',
  styleUrls: ['./ai-prediction.component.less']
})
export class AiPredictionComponent implements OnInit {

  @Input() response;

  constructor() { }

  ngOnInit(): void {
  }

}
