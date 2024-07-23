import {Injectable} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ClientDetailsDialogComponent} from "./client-details-dialog.component";
import {ClientDetailsDialogData} from "./client-details-dialog-data";
import {Client} from "../clients/client";

@Injectable({
  providedIn: 'root'
})
export class ClientDetailsDialogService {
  constructor(private readonly dialog: MatDialog) {
  }

  openCreateClientDialog() {
    return this.dialog.open<ClientDetailsDialogComponent, ClientDetailsDialogData>(ClientDetailsDialogComponent, {data: null});
  }

  openEditClientDialog(client: ClientDetailsDialogData) {
    return this.dialog.open<ClientDetailsDialogComponent, ClientDetailsDialogData, Client>(ClientDetailsDialogComponent, {data: client});
  }
}
