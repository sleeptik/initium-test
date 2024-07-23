import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Client} from "./client";
import {ClientsService} from "./clients.service";
import {SelectionModel} from "@angular/cdk/collections";
import {ClientDetailsDialogService} from "../client-details-dialog/client-details-dialog.service";
import {MatSort} from "@angular/material/sort";
import {ClientDeleteDialogService} from "../client-delete-dialog/client-delete-dialog.service";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  readonly dataSource: MatTableDataSource<Client> = new MatTableDataSource<Client>();
  readonly displayedColumns = ["checkbox", "name", "surname", "email", "phone", "space-filler"];
  readonly selection: SelectionModel<Client> = new SelectionModel<Client>(true);
  @ViewChild(MatSort, {static: true}) sort!: MatSort;


  constructor(private readonly clientsService: ClientsService,
              private readonly clientDialogService: ClientDetailsDialogService,
              private readonly clientDeleteDialogService: ClientDeleteDialogService) {
  }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.clientsService.getClients().subscribe(
      value => this.dataSource.data = value.users
    );
  }

  isAllClientsSelected() {
    return this.selection.selected.length === this.dataSource.data.length;
  }

  toggleAllClients() {
    this.isAllClientsSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(value => this.selection.select(value));
  }

  editClient(client: Client) {
    this.clientDialogService.openEditClientDialog(client).afterClosed().subscribe(
      value => {
        if (!value)
          return;

        const dataIndex = this.dataSource.data.indexOf(client);
        this.dataSource.data[dataIndex] = value;
        this.dataSource.data = this.dataSource.data;

        this.clientsService.saveClients({users: this.dataSource.data});
      }
    );
  }

  deleteClients() {
    if (this.selection.isEmpty())
      return;

    this.clientDeleteDialogService.openDeleteClientsDialog(this.selection.selected).afterClosed().subscribe(value => {
      if (!value)
        return;

      this.dataSource.data = this.dataSource.data.filter(value =>
        this.selection.selected.indexOf(value) == -1
      );
      this.selection.clear();
      this.clientsService.saveClients({users: this.dataSource.data});
    });
  }

  createClient() {
    this.clientDialogService.openCreateClientDialog().afterClosed().subscribe(
      value => {
        if (!value)
          return;

        this.dataSource.data.push(value);
        this.dataSource.data = this.dataSource.data;

        this.clientsService.saveClients({users: this.dataSource.data});
      }
    );
  }
}
