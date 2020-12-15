import React, { useContext } from 'react';
import { Form, Field } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { sendNewMessage } from '../actions';
import UserNameContext from './UserNameContext';

const SendMessageForm = () => {
  const dispatch = useDispatch();
  const channelId = useSelector((state) => state.currentChannelId.currentId);
  const user = useContext(UserNameContext);
  const required = (value) => (value ? undefined : 'write message');

  const onSubmit = ({ message }, form) => {
    const data = {
      message,
      user,
      channelId,
    };

    return dispatch(sendNewMessage(data))
      .then((values) => {
        if (values === null) setTimeout(form.reset, 0);
      });
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({
        handleSubmit, submitting, pristine,
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <Field
              type="text"
              component="input"
              className="form-control type_msg"
              name="message"
              placeholder="Type your message"
              validate={required}
            />
            <div className="input-group-append">
              <span className="input-group-text send_btn">
                {
                  submitting ? (
                    <div className="spinner-border" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    <button
                      type="submit"
                      className="send_btn bg-primary"
                      disabled={submitting || pristine}
                    >
                      SEND
                    </button>
                  )
                }
              </span>
            </div>
          </div>
        </form>
      )}
    />
  );
};

export default SendMessageForm;
