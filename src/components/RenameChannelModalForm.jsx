import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { showChannelRenameModal, renameCurrentChannel } from '../actions';

const RenameChannelModalForm = () => {
  const dispatch = useDispatch();
  const idRenameChannel = useSelector((state) => state.currentChannelId.currentId);
  const channel = useSelector((state) => state.channels[idRenameChannel].name);

  const onSubmit = ({ newRoomName }) => {
    dispatch(renameCurrentChannel(newRoomName, idRenameChannel));
    dispatch(showChannelRenameModal());
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
              name="newRoomName"
              initialValue={channel}
            />
            <div className="input-group-append">
              <button
                type="submit"
                className="send_btn bg-primary"
                disabled={submitting || pristine}
              >
                OK
              </button>
            </div>
          </div>
        </form>
      )}
    />
  );
};

export default RenameChannelModalForm;
