export class ActivityTypeToRouteValueConverter {
  toView(value) {
    switch(value) {
      case 'ticket':
        return 'thread';
      default:
        throw new Error(`Unknown ticket type: ${value}.`);
    }
  }
}