import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import * as actions from '../actions';
// import { uniqueId, omitBy } from 'lodash';

const channels = handleActions({
  [actions.addChannel](state, { payload: newChannel }) {
    return state;
  },
  [actions.removeChanel](state, { payload: channelId }) {
    return state;
  },
}, {});

const messages = handleActions({
  [actions.addMessage](state, { payload: message }) {
    return [...state, message];
  },
  [actions.sendMessageRequest](state) {
    return state;
  },
  [actions.sendMessageSuccess](state) {
    return state;
  },
  [actions.sendMessageFailure](state) {
    return state;
  },
}, []);

const currentChannelId = handleActions({
  [actions.idCurrentChannel](state, { payload: id }) {
    return {
      ...state,
      currentId: id,
    };
  },
}, {});

export default combineReducers({
  channels,
  messages,
  currentChannelId,
});
