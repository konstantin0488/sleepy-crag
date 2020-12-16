import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import { showChannelRemoveModal, removeCurrentChannel } from '../actions';

const RemoveChannelModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.ui.isModalRemove);
  const currentChannelId = useSelector((state) => state.ui.currentChannelId);
  const request = useSelector((state) => state.ui.requestStateRemove);

  const handleClose = () => dispatch(showChannelRemoveModal());

  const onClickRemoveChannel = async () => {
    const response = await dispatch(removeCurrentChannel(currentChannelId));
    if (response) {
      await dispatch(showChannelRemoveModal());
    }
  };

  return (
    <Modal show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton className="add_room_modal">
        <Modal.Title>NOTIFICATION !</Modal.Title>
      </Modal.Header>
      <Modal.Body className="add_room_modal">
        {
          request === 'request' ? (
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ) : 'Are you sure you want to remove the room?'
        }
      </Modal.Body>
      <Modal.Footer className="add_room_modal">
        <Button onClick={onClickRemoveChannel}>YES</Button>
        <Button onClick={handleClose}>NO</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RemoveChannelModal;
