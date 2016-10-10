import {inject, Aurelia} from 'aurelia-framework';
import {User} from 'backend/server';
import {TabOpened} from 'resources/messages/tab-opened';
import routes from './routes';
import {CommonDialogs} from 'resources/dialogs/common-dialogs';

@inject(Aurelia, User, CommonDialogs)
export class Shell {
  constructor(aurelia, user, commonDialogs) {
    this.aurelia = aurelia;
    this.user = user;
    this.commonDialogs = commonDialogs;
    this.tabs = [];
  }

  configureRouter(config, router) {
    this.router = router;
    config.map(routes);
  }

  bind() {
    this.navigationCompleteSub = this.aurelia.subscribe('router:navigation:complete', msg => this.onNavigationComplete(msg));
    this.tabOpenedSub = this.aurelia.subscribe(TabOpened, msg => this.onTabOpened(msg));
  }

  unbind() {
    this.navigationCompleteSub.dispose();
    this.tabOpenedSub.dispose();
  }

  closeTab(tab) {
    let index = this.tabs.indexOf(tab);

    if (index === -1) {
      return;
    }

    this.tabs.splice(index, 1);

    if (!tab.isActive) {
      return;
    }
    
    let next = this.tabs[0];

    if (next) {
      this.router.navigateToRoute(next.route, next.params, true);
    } else {
      this.router.navigateToRoute('home', true);
    }
  }

  middleCloseTab(e, tab) {
    if (e && (e.which == 2 || e.button == 4 )) {
      this.closeTab(tab);
      e.preventDefault();
    } else {
      this.router.navigateToRoute(tab.route, tab.params);
    }
  }

  logout() {
    //TODO: Implement open tab guard logic.
    if (this.tabs.length == 0)
      this._doLogout();

    let message = "You have tabs open. Are you sure you want to log out?";

    this.commonDialogs.showMessage(message, "Logout", ["Yes", "No"])
                      .then(response => {
      if (response.wasCancelled)
        return;

      this._doLogout();
    })
  }
  
  _doLogout() {
    this.aurelia.setRoot('login/login');
    this.aurelia.container.unregister(User);
    this.router.reset();
    this.router.deactivate();
    this.tabs = [];
  }

  onTabOpened(tab) {
    let existing = this.tabs.find(x => x.matches(tab));
    
    if (!existing) {
      this.tabs.push(tab);
    }
  }
  
  onNavigationComplete(msg) {
    if (!msg.result.completed) {
      return;
    }
    
    this.tabs.forEach(x => x.updateActivation(msg.instruction));
  }
}