import { createAction } from 'redux-actions';
import axios from 'axios';
import routes from '../routes';

export const setCurrentChannelId = createAction('CURRENT_CHANNEL_ID_SET');
export const showNewChannelModal = createAction('NEW_CHANNEL_MODAL_SHOW');
export const showChannelRemoveModal = createAction('REMOVE_CHANNEL_MODAL_FORM');
export const showChannelRenameModal = createAction('RENAME_CHANNEL_MODAL_SHOW');

export const addMessage = createAction('MESSAGE_ADD');
export const sendMessageSuccess = createAction('SEND_MESSAGE_SUCCESS');
export const sendMessageRequest = createAction('SEND_MESSAGE_REQUEST');
export const sendMessageFailure = createAction('SEND_MESSAGE_FAILURE');

export const addChannel = createAction('CHANNEL_ADD');
export const sendNewChannelSuccess = createAction('SEND_CHANNEL_SUCCESS');
export const sendNewChannelRequest = createAction('SEND_CHANNEL_REQUEST');
export const sendNewChannelFailure = createAction('SEND_CHANNEL_FAILURE');

export const removeChannel = createAction('CHANNEL_REMOVE');
export const removeChannelSuccess = createAction('REMOVE_CHANNEL_SUCCESS');
export const removeChannelRequest = createAction('REMOVE_CHANNEL_REQUEST');
export const removeChannelFailure = createAction('REMOVE_CHANNEL_FAILURE');

export const renameChannel = createAction('CHANNEL_RENAME');
export const renameChannelSuccess = createAction('RENAME_CHANNEL_SUCCESS');
export const renameChannelRequest = createAction('RENAME_CHANNEL_REQUEST');
export const renameChannelFailure = createAction('RENAME_CHANNEL_FAILURE');

export const sendNewMessage = ({ user, channelId, message }) => async (dispatch) => {
  dispatch(sendMessageRequest());
  try {
    await axios.post(routes.channelMessagesPath(channelId), {
      data: {
        attributes: {
          message,
          user,
          date: new Date().toLocaleString(),
        },
      },
    });
    dispatch(sendMessageSuccess());
    return null;
  } catch (error) {
    dispatch(sendMessageFailure());
    return error;
  }
};

export const sendNewChannel = (channelName) => async (dispatch) => {
  dispatch(sendNewChannelRequest());
  try {
    const resp = await axios.post(routes.channelsPath(), {
      data: {
        attributes: {
          name: channelName,
        },
      },
    });
    dispatch(sendNewChannelSuccess());
    return resp;
  } catch (error) {
    dispatch(sendNewChannelFailure());
    return error;
  }
};

export const removeCurrentChannel = (channelId) => async (dispatch) => {
  dispatch(removeChannelRequest());
  try {
    const resp = await axios.delete(routes.channelPath(channelId));
    dispatch(removeChannelSuccess());
    return resp;
  } catch (error) {
    dispatch(removeChannelFailure());
    return error;
  }
};

export const renameCurrentChannel = (channelName, channelId) => async (dispatch) => {
  dispatch(renameChannelRequest());
  try {
    const resp = await axios.patch(routes.channelPath(channelId), {
      data: {
        attributes: {
          name: channelName,
        },
      },
    });
    dispatch(renameChannelSuccess());
    return resp;
  } catch (error) {
    dispatch(renameChannelFailure());
    return error;
  }
};
