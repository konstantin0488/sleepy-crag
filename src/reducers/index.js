import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import * as actions from '../actions/index';
// import { uniqueId, omitBy } from 'lodash';

const channels = handleActions({
  [actions.addChannel](state, { payload }) {
    return state;
  },
  [actions.removeChanel](state, { payload }) {
    return state;
  },
}, {});

const messages = handleActions({
  [actions.addMessage](state, payload) {
    return state;
  },
}, []);

const currentChannelId = handleActions({
  [actions.idCurrentChannel](state, payload) {
    return state;
  },
}, 0);

export default combineReducers({
  channels,
  messages,
  currentChannelId,
});
