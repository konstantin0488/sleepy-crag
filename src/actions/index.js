import { createAction } from 'redux-actions';
import axios from 'axios';
import routes from '../routes';

export const addChannel = createAction('CHANNEL_ADD');
// export const removeChannel = createAction('CHANNEL_REMOVE');
export const idCurrentChannel = createAction('CURRENT_CHANNEL_ID');

export const addMessage = createAction('MESSAGE_ADD');
export const sendMessageSuccess = createAction('SEND_MESSAGE_SUCCESS');
export const sendMessageRequest = createAction('SEND_MESSAGE_REQUEST');
export const sendMessageFailure = createAction('SEND_MESSAGE_FAILURE');

export const sendNewMessage = ({ user, channelId, message }) => async (dispatch) => {
  dispatch(sendMessageRequest());
  try {
    const resp = await axios.post(routes.channelMessagesPath(channelId), {
      data: {
        attributes: {
          message,
          user,
          date: new Date().toLocaleString(),
        },
      },
    });
    dispatch(sendMessageSuccess());
    return resp;
  } catch (error) {
    dispatch(sendMessageFailure());
    return error;
  }
};
