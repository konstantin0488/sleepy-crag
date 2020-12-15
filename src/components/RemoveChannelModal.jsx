import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import { showChannelRemoveModal, removeCurrentChannel } from '../actions';

const RemoveChannelModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modals.isModalRemove);
  const currentChannelId = useSelector((state) => state.modals.currentChannelId);

  const handleClose = () => dispatch(showChannelRemoveModal());
  const onClickRemoveChannel = () => {
    dispatch(removeCurrentChannel(currentChannelId));
    handleClose();
  };

  return (
    <Modal show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton className="add_room_modal">
        <Modal.Title>NOTIFICATION !</Modal.Title>
      </Modal.Header>
      <Modal.Body className="add_room_modal">
        Are you sure you want to remove the room?
      </Modal.Body>
      <Modal.Footer className="add_room_modal">
        <Button onClick={onClickRemoveChannel}>YES</Button>
        <Button onClick={handleClose}>NO</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RemoveChannelModal;
