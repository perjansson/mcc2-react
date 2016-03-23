import {Dispatcher} from 'flux';

class AppDispatcher extends Dispatcher {

  handleViewAction(action) {
    console.info('View action:' + action.actionType);
    this.dispatch({ source: 'VIEW_ACTION', action });
  }

  handleServerAction(action) {
    console.info('Server action:' + action.actionType);
    this.dispatch({ source: 'SERVER_ACTION', action });
  }

}

export default new AppDispatcher();
