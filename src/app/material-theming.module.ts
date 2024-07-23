import {ModuleWithProviders, NgModule} from "@angular/core";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from "@angular/material/form-field";
import {MAT_RIPPLE_GLOBAL_OPTIONS} from "@angular/material/core";

@NgModule()
export class MaterialThemingModule {
  static forRoot(): ModuleWithProviders<MaterialThemingModule> {
    return {
      ngModule: MaterialThemingModule,
      providers: [
        {
          provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
          useValue: {
            appearance: 'outline',
            hideRequiredMarker: true
          }
        },
        {
          provide: MAT_RIPPLE_GLOBAL_OPTIONS,
          useValue: {
            disabled: true
          }
        }
      ]
    };
  }
}
