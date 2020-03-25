import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ContentTypes } from 'src/constants';
import { ApiDataService } from 'src/app/shared-components/api-data/api-data.service';

@Component({
  selector: 'app-content-type-picker',
  templateUrl: './content-type-picker.component.html',
  styleUrls: ['./content-type-picker.component.less']
})
export class ContentTypePickerComponent implements OnInit {
  contentTypes = ContentTypes;
  @Input() selectedContentType = this.contentTypes[0].id;
  @Output() contentTypeChanged = new EventEmitter<string>();

  constructor(public apiDataService: ApiDataService) { }

  ngOnInit(): void {
  }

  onContentTypeChanged (selectedContentType: string) {
    this.contentTypeChanged.emit(this.selectedContentType);
    this.apiDataService.updateContentType(selectedContentType)
  }

}
