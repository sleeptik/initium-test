import {Component} from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(iconRegistry: MatIconRegistry,
  ) {
    const alias = "material-symbols";
    const fontClass = "material-symbols-rounded";

    iconRegistry.registerFontClassAlias(alias, fontClass);
    iconRegistry.setDefaultFontSetClass(fontClass, "mat-ligature-font");
  }
}
