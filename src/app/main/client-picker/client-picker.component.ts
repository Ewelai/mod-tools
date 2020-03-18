import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { ApiDataService } from '../../shared-components/api-data/api-data.service';
import { faServer } from '@fortawesome/free-solid-svg-icons';

interface Client {
  id:number;
  name:string;
}

@Component({
  selector: 'client-picker',
  templateUrl: './client-picker.component.html',
  styleUrls: ['./client-picker.component.less']
})
export class ClientPickerComponent implements OnInit {
  faServer= faServer;

  @Input() selectedClient = 0;
  @Output() clientChanged = new EventEmitter<number>();

  // TODO: This needs to be externally sourced
  clients:Client[] = [
    { id: 0,  name: 'Community Sift' },
    { id: 60, name: 'Live' },
    { id: 61, name: 'Sandbox' },
  ]

  constructor(private apiDataService: ApiDataService) { }

  ngOnInit() : void { }

  onClientChanged (selectedClient: number) {
    this.clientChanged.emit(this.selectedClient);
    this.apiDataService.updateClientData(selectedClient);
  }

}
