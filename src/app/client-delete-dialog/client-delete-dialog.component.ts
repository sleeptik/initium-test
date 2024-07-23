import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ClientDeleteDialogData} from "./client-delete-dialog-data";

@Component({
  selector: 'app-client-delete-dialog',
  templateUrl: './client-delete-dialog.component.html',
  styleUrls: ['./client-delete-dialog.component.scss']
})
export class ClientDeleteDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) readonly data: ClientDeleteDialogData,
              private readonly dialogRef: MatDialogRef<ClientDeleteDialogComponent>) {
  }

  confirm() {
    this.dialogRef.close(true);
  }

  cancel() {
    this.dialogRef.close();
  }
}
