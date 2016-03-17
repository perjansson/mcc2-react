import { Dispatcher } from 'flux';

class AppDispatcher extends Dispatcher {
  handleViewAction(action) {
    console.info('Action: ', action);
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    })
  }
}

export default new AppDispatcher();
