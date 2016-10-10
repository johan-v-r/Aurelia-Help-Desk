import {inject, Aurelia} from 'aurelia-framework';
import {Server} from 'backend/server';
import {TabOpened} from 'resources/messages/tab-opened';
import {Router} from 'aurelia-router';

@inject(Server, Aurelia, Router)
export class Home {
  constructor(server, aurelia, router) {
    this.server = server;
    this.aurelia = aurelia;
    this.router = router;
    this.activity = null;
    this.news = null;
  }
  
  activate() {
    return Promise.all([
      this.server.getRecentActivity().then(activity => this.activity = activity),
      this.server.getNews().then(news => this.news = news)
    ]);
  }
  
  openTab(e, activity) {
    if (e && (e.which == 2 || e.button == 4 )) {

      this.server.getTicketDetails(parseInt(activity.associatedId)).then(ticket => {
        if (ticket) {
          this.aurelia.publish(new TabOpened(ticket.title, 'thread', { id: ticket.id }));
        }
      });

      e.preventDefault();
    } else {
      if (activity.type == 'ticket')
        this.router.navigateToRoute('thread', { id: activity.associatedId });
      else
        this.router.navigateToRoute(activity.type, { id: activity.associatedId });
    }
  };
}