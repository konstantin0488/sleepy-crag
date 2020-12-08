import { createAction } from 'redux-actions';
import axios from 'axios';
import routes from '../routes';

export const addChannel = createAction('CHANNEL_ADD');
export const removeChannel = createAction('CHANNEL_REMOVE');
export const idCurrentChannel = createAction('CURRENT_CHANNEL_ID');

export const addMessage = createAction('MESSAGE_ADD');
export const sendMessageSuccess = createAction('ADD_MESSAGE_SUCCESS');
export const sendMessageRequest = createAction('ADD_MESSAGE_REQUEST');
export const sendMessageFailure = createAction('ADD_MESSAGE_FAILURE');

export const sendNewMessage = ({ user, channelId, message }) => async (dispatch) => {
  dispatch(sendMessageRequest());
  try {
    await axios.post(routes.channelMessagesPath(channelId), {
      data: {
        attributes: {
          message,
          user,
        },
      },
    });
    dispatch(sendMessageSuccess());
  } catch (error) {
    dispatch(sendMessageFailure());
    return error;
  }
};
