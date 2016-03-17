import { Dispatcher } from 'flux';

class AppDispatcher extends Dispatcher {
  handleViewAction(action) {
    console.info(action.actionType);
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    })
  }
}

export default new AppDispatcher();
