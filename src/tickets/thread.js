import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {RedirectToRoute, Router} from 'aurelia-router';
import {CommonDialogs} from 'resources/dialogs/common-dialogs';
import {TabOpened} from 'resources/messages/tab-opened';
import {Server, User} from 'backend/server';

@inject(Server, Router, CommonDialogs, EventAggregator, User)
export class Thread {
  constructor(server, router, commonDialogs, eventAggregator, user) {
    this.server = server;
    this.router = router;
    this.commonDialogs = commonDialogs;
    this.eventAggregator = eventAggregator;
    this.user = user;
  }

  getParticipant(id) {
    return this.ticket.participants.find(x => x.id == id);
  }

  save() {
    var isNew = this.ticket.id == 0;
    this.server.saveTicket(this.ticket).then(ticket => {
      this.ticket = ticket;

      if (isNew) {
        this.router.navigateToRoute('thread', {id: ticket.id}, { replace: true, trigger: false });
        this.eventAggregator.publish(new TabOpened(ticket.title, 'thread', { id: ticket.id }));
      }
    });
  }

  submit(status) {
    if (this.message) {
      if (!this.getParticipant(this.user.id)) {
        this.ticket.participants.push(this.user);
      }

      this.ticket.posts.unshift({
        createdAt: new Date(),
        fromId: this.user.id,
        content: this.message
      });

      this.message = '';
    }

    this.ticket.status = status;
    this.save();
  }

  canActivate(params) {
    if (params.id == 'new') {
      if (params.title) {
        this.ticket = this.server.createTicket(params.title);
        this.from = this.getParticipant(this.ticket.fromId);
        return true;
      }
      
      return this.commonDialogs.prompt("Wat's jou issue?").then(response => {
        if (response.wasCancelled) {
          return false;
        }

        return new RedirectToRoute('thread', { id: 'new', title:  response.output});
      });
    }
    
    return this.server.getTicketDetails(parseInt(params.id)).then(ticket => {
      if (ticket) {
        this.ticket = ticket;
        this.from = this.getParticipant(ticket.fromId);
        this.eventAggregator.publish(new TabOpened(ticket.title, 'thread', { id: ticket.id }));
        return true;
      }
      
      return new RedirectToRoute('home');
    });
  }

  activate(params) {
    this.message = '';
  }

  canDeactivate() {
    if (this.ticket.id === 0) {
      let message = 'You have created a ticket but have not yet posted it with a status. If you leave now, your work will be lost. Do you wish to continue?'

      return this.commonDialogs.showMessage(
        message,
        'Ticket Not Saved',
        ['Yes', 'No']
      ).then(response => !response.wasCancelled);
    }

    return true;
  }
}
