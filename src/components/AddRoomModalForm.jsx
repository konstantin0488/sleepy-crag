import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { sendNewChannel, showNewChannelModal } from '../actions';

const AddRoomModalForm = () => {
  const dispatch = useDispatch();

  const onSubmit = async ({ newRoom }) => {
    const response = await dispatch(sendNewChannel(newRoom));
    if (response) {
      await dispatch(showNewChannelModal());
    }
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <Field
              type="text"
              component="input"
              className="form-control add_modal_text"
              name="newRoom"
              placeholder="Type room name"
            />
            <div className="input-group-append">
              <button
                type="submit"
                className="send_btn bg-primary"
                disabled={submitting || pristine}
              >
                {
                  submitting ? (
                    <div className="spinner-border" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : 'CREATE'
                }
              </button>
            </div>
          </div>
        </form>
      )}
    />
  );
};

export default AddRoomModalForm;
