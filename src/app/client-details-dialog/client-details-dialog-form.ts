import {FormControl} from "@angular/forms";

export interface ClientDetailsDialogForm {
  name: FormControl<string>,
  surname: FormControl<string>,
  email: FormControl<string>,
  phone: FormControl<string>,
}
