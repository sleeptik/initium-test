import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Clients} from "./clients";
import {of, tap} from "rxjs";

const storageKey = "clients";

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  constructor(private readonly httpClient: HttpClient) {
  }

  getClients() {
    const json = localStorage.getItem(storageKey);
    const clients = json ? JSON.parse(json) as Clients : null;

    if (clients && clients.users.length > 0) {
      return of(clients);
    }

    return this.httpClient.get<Clients>("https://test-data.directorix.cloud/task1").pipe(
      tap(value => localStorage.setItem(storageKey, JSON.stringify(value)))
    );
  }

  saveClients(clients: Clients) {
    localStorage.setItem(storageKey, JSON.stringify(clients));
  }
}
