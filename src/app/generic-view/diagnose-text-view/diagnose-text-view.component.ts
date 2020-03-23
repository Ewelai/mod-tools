import { Component, OnInit } from '@angular/core';
import { ApiDataService } from 'src/app/shared-components/api-data/api-data.service';
import { ViewFlags } from '@angular/compiler/src/core';
import { compileNgModule } from '@angular/compiler';

@Component({
  selector: 'app-diagnose-text-view',
  templateUrl: './diagnose-text-view.component.html',
  styleUrls: ['./diagnose-text-view.component.less']
})
export class DiagnoseTextViewComponent implements OnInit {
  isShow: any;
  mouseValue: any;
  response: any;
  extendedOriginal: any[] = [];

  constructor(public apiDataService: ApiDataService) { }

  ngOnInit(): void {
    this.getData();
  }

  mouseEnter(item) {
    this.mouseValue = item;
  }

  mouseLeave(item) {
    this.mouseValue = '';
  }

  getData() {
    this.apiDataService.getApiResponse().subscribe(data => {
      this.response = data;
      console.log('responeDeagnoseText', this.response)
      if(data !== null){
        this.response = data.extended;
        this.textOutputOriginal(this.response);
      }
    })
  }

  textOutputOriginal(array) {
    array.forEach(item => {
      this.extendedOriginal.push(item.original);
    });
  }
}
