import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { omitBy } from 'lodash';
import * as actions from '../actions';

const channels = handleActions({
  [actions.addChannel](state, { payload: newChannel }) {
    return {
      ...state,
      [newChannel.id]: newChannel,
    };
  },
  [actions.removeChannel](state, { payload: channelId }) {
    return omitBy(state, (value) => value.id === channelId);
  },
  [actions.renameChannel](state, { payload: channel }) {
    return {
      ...state,
      [channel.id]: channel,
    };
  },
}, {});

const messages = handleActions({
  [actions.addMessage](state, { payload: message }) {
    return [...state, message];
  },
}, []);

const currentChannelId = handleActions({
  [actions.setCurrentChannelId](state, { payload: id }) {
    return {
      ...state,
      currentId: id,
    };
  },
}, {});

const ui = handleActions({
  [actions.showNewChannelModal](state) {
    return { ...state, isModal: !state.isModal };
  },
  [actions.showChannelRemoveModal](state, { payload: id }) {
    return { ...state, isModalRemove: !state.isModalRemove, currentChannelId: id };
  },
  [actions.showChannelRenameModal](state, { payload: id }) {
    return {
      ...state, isModalRename: !state.isModalRename, currentChannelId: id,
    };
  },
  [actions.sendMessageRequest](state) {
    return { ...state, requestStateMessage: 'request' };
  },
  [actions.sendMessageSuccess](state) {
    return { ...state, requestStateMessage: 'success' };
  },
  [actions.sendMessageFailure](state) {
    return { ...state, requestStateMessage: 'failure' };
  },
  [actions.sendNewChannelRequest](state) {
    return { ...state, requestStateChannel: 'request' };
  },
  [actions.sendNewChannelSuccess](state) {
    return { ...state, requestStateChannel: 'success' };
  },
  [actions.sendNewChannelFailure](state) {
    return { ...state, requestStateChannel: 'failure' };
  },
  [actions.renameChannelRequest](state) {
    return { ...state, requestStateRename: 'request' };
  },
  [actions.renameChannelSuccess](state) {
    return { ...state, requestStateRename: 'success' };
  },
  [actions.renameChannelFailure](state) {
    return { ...state, requestStateRename: 'failure' };
  },
  [actions.removeChannelSuccess](state) {
    return { ...state, requestStateRemove: 'success' };
  },
  [actions.removeChannelRequest](state) {
    return { ...state, requestStateRemove: 'request' };
  },
  [actions.removeChannelFailure](state) {
    return { ...state, requestStateRemove: 'failure' };
  },
}, {
  isModal: false,
  isModalRemove: false,
  isModalRename: false,
});

export default combineReducers({
  channels,
  messages,
  currentChannelId,
  ui,
});
