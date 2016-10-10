import routes from './routes';

export class SettingsIndex {
  configureRouter(config, router) {
    this.router = router;
    config.map(routes);
  }
}

export class CategoriesValueConverter {
  toView(navModels) {
    let categories = new Map();
    
    for(let model of navModels) {
      let routes = categories.get(model.settings.category);
      
      if (!routes) {
        categories.set(model.settings.category, routes = []);
      }
      
      routes.push(model);
    }
    
    return categories;
  }
}