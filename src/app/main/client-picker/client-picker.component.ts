import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { Clients } from 'src/constants';
import { ApiDataService } from '../../shared-components/api-data/api-data.service';
import { faServer } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-client-picker',
  templateUrl: './client-picker.component.html',
  styleUrls: ['./client-picker.component.less']
})
export class ClientPickerComponent implements OnInit {
  faServer = faServer;
  clients = Clients

  @Input() selectedClient = this.clients[0].id;
  @Output() clientChanged = new EventEmitter<number>();

  constructor(private apiDataService: ApiDataService) { }

  ngOnInit() : void { }

  onClientChanged (selectedClient: number): void {
    this.clientChanged.emit(this.selectedClient);
    this.apiDataService.updateClientId(selectedClient);
  }

}
