import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClientDetailsDialogForm} from "./client-details-dialog-form";
import {ClientDetailsDialogData} from "./client-details-dialog-data";
import {ClientDetailsDialogService} from "./client-details-dialog.service";
import {Client} from "../clients/client";


@Component({
  selector: 'app-client-details-dialog',
  templateUrl: './client-details-dialog.component.html',
  styleUrls: ['./client-details-dialog.component.scss']
})
export class ClientDetailsDialogComponent {
  readonly clientDetailsForm: FormGroup<ClientDetailsDialogForm>;

  constructor(formBuilder: FormBuilder,
              private readonly dialogRef: MatDialogRef<ClientDetailsDialogService>,
              @Inject(MAT_DIALOG_DATA) readonly data: ClientDetailsDialogData
  ) {
    this.clientDetailsForm = formBuilder.group({
      name: formBuilder.control(data?.name ?? "", {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(2)]
      }),
      surname: formBuilder.control(data?.surname ?? "", {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(2)]
      }),
      email: formBuilder.control(data?.email ?? "", {
        nonNullable: true,
        validators: [Validators.required, Validators.email]
      }),
      phone: formBuilder.control(data?.phone ?? "", {
        nonNullable: true,
        validators: [Validators.pattern("(\\+7|8)[0-9]{10}")]
      })
    }, {updateOn: "change"});
  }

  save() {
    this.dialogRef.close(this.clientDetailsForm.value)
  }

  close() {
    this.dialogRef.close();
  }
}
