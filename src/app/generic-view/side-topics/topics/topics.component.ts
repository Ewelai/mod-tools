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
  dislike = './assets/images/dislike.svg';
  like ='./assets/images/like.svg';

  constructor() { }

  ngOnInit(): void {
  }

  globalChatPolicy(): string {
    if((this.response.topics[5] >= 5) || (this.response.topics[0] >= 6)) {
      return 'red';
    } else {
      return 'green';
    }
  }

  privateChatPolicy(): string {
    if(this.response.topics[5] >= 6) {
      return 'red';
    } else {
      return 'green';
    }
  }

  globalChatPolicyImage(): string {
    if(this.response.topics[0] >= 6 || this.response.topics[5] >= 5) {
      return this.dislike;
    } else {
      return this.like;
    }
  }

  privateChatPolicyImage(): string {
    if(this.response.topics[5] >= 6) {
      return this.dislike;
    } else {
      return this.like;
    }
  }

}
