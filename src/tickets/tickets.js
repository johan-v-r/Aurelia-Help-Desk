import {Server} from 'backend/server';
import {inject} from 'aurelia-framework';

@inject(Server)
export class Tickets {
  constructor(server) {
    this.server = server;
  }
  
  activate() {
    return this.server.getTicketSummaries().then(tickets => this.tickets = tickets);
  }
}