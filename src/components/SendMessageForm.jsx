import React, { useContext } from 'react';
import { Form, Field } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { sendNewMessage } from '../actions';
import UserNameContext from './UserNameContext';

const SendMessageForm = () => {
  const dispatch = useDispatch();
  const channelId = useSelector((state) => state.currentChannelId.currentId);
  const user = useContext(UserNameContext);

  const onSubmit = ({ message }, form) => {
    const data = {
      message,
      user,
      channelId,
    };
    dispatch(sendNewMessage(data));
    setTimeout(form.reset, 0);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <Field
              type="text"
              component="textarea"
              className="form-control type_msg"
              name="message"
              placeholder="Type your message"
            />
            <div className="input-group-append">
              <span className="input-group-text send_btn">
                <button
                  type="submit"
                  className="btn-sm"
                  disabled={submitting || pristine}
                >
                  SEND
                </button>
              </span>
            </div>
          </div>
        </form>
      )}
    />
  );
};

export default SendMessageForm;
