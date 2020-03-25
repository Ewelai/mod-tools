import { Component, OnInit, Input } from '@angular/core';
import { Topics } from 'src/constants';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.less']
})
export class TopicsComponent implements OnInit {
  @Input() response;
  @Input() topicsResponse;
  topicsConstant = Topics;

  constructor() { }

  ngOnInit(): void {
  }

}
