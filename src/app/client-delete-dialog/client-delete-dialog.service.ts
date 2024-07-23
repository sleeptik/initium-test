import {Injectable} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Client} from "../clients/client";
import {ClientDeleteDialogComponent} from "./client-delete-dialog.component";
import {ClientDeleteDialogData} from "./client-delete-dialog-data";

@Injectable({
  providedIn: 'root'
})
export class ClientDeleteDialogService {
  constructor(private readonly dialog: MatDialog) {
  }

  openDeleteClientsDialog(clients: Client[]) {
    return this.dialog.open<ClientDeleteDialogComponent, ClientDeleteDialogData, boolean>(ClientDeleteDialogComponent, {data: {rowsAmount: clients.length}});
  }
}
