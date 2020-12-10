import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import * as actions from '../actions';
// import { uniqueId, omitBy } from 'lodash';

const channels = handleActions({
  // [actions.addChannel](state, { payload: newChannel }) {
  //   return state;
  // },
  // [actions.removeChanel](state, { payload: channelId }) {
  //   return state;
  // },
}, {});

const messages = handleActions({
  [actions.addMessage](state, { payload: message }) {
    return [...state, message];
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

const postRequests = handleActions({
  [actions.sendMessageRequest](state) {
    return {
      ...state,
      requestState: 'request',
    };
  },
  [actions.sendMessageSuccess](state) {
    return {
      ...state,
      requestState: 'success',
    };
  },
  [actions.sendMessageFailure](state) {
    return {
      ...state,
      requestState: 'failure',
    };
  },
}, {});

export default combineReducers({
  channels,
  messages,
  currentChannelId,
  postRequests,
});
