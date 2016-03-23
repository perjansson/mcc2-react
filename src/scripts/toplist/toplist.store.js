import { EventEmitter } from 'events';
import AppDispatcher from '../common/dispatcher';
import ActionTypes from '../common/action-types';
import Api from '../common/api';

const CHANGE_EVENT = 'change';

class TopListStore extends EventEmitter {

  constructor() {
    super();
    this.meetings = null;
  }

  getMeetings() {
    return this.meetings;
  }

  addChangeListener(listener) {
    this.addListener(CHANGE_EVENT, listener);
  }

  removeChangeListener(listener) {
    this.removeListener(CHANGE_EVENT, listener);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

}

const topListStore = new TopListStore();

AppDispatcher.register((payload) => {
  switch (payload.action.actionType) {
    case ActionTypes.GET_MEETINGS:
      Api.getMeetings((meetings) => {
        topListStore.meetings = meetings;
        topListStore.emitChange();
      });
      break;

    default:
      // Do nothing
  }

  return true;
});

export default topListStore;
