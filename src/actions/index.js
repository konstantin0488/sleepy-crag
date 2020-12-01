import { createAction } from 'redux-actions';

export const addChanel = createAction('CHANEL_ADD');

export const removeChanel = createAction('CHANEL_REMOVE');

export const addMessage = createAction('MESSAGE_ADD');

export const idCurrentChannel = createAction('CURRENT_CHANNEL_ID');
