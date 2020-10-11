import { Component } from "@angular/core";
import {MenuItem} from 'primeng/api';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CopOverTime-UI";

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'HomePage',
        icon: 'pi pi-fw pi-home',
        routerLink: [""],
      },
      {
        label: 'Overtime Hours',
        icon: 'pi pi-fw pi-clock',
        routerLink: ["overtime-hours"],
      },
      {
        label: 'General Data',
        icon: 'pi pi-fw pi-briefcase',
        items: [
          {label: 'Program types', icon: 'pi pi-fw pi-tag', routerLink: ["program-types"]},
          {label: 'Departments', icon: 'pi pi-fw pi-list', routerLink: ["departments"],
            items: [{label: 'Department programs', icon: 'pi pi-fw pi-money-bill', routerLink: ["department-programs"]}]
          },

          {label: 'Ranks', icon: 'pi pi-fw pi-star', routerLink: ["ranks"]},
          {label: 'Legal Days Off', icon: 'pi pi-fw pi-calendar-times', routerLink: ["legal-days-off"]},
        ]
      }
    ];
  }
}

