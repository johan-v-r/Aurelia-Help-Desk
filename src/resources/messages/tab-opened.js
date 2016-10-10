export class TabOpened {
  constructor(title, route, params) {
    this.title = title;
    this.route = route;
    this.params = params || {};
    this.isActive = true;
  }
  
  updateActivation(instruction) {
    if (this.route !== instruction.config.name) {
      this.isActive = false;
      return;
    }
    
    let params = instruction.params;
    
    for(let key in params) {
      if (params[key] !== this.params[key].toString()) {
        this.isActive = false;
        return;
      }
    }
    
    this.isActive = true;
  }
  
  matches(other) {
    if (this.route !== other.route) {
      return false;
    }
    
    for(let key in other.params) {
      if (other.params[key] !== this.params[key]) {
        return false;
      }
    }
    
    return true;
  }
}