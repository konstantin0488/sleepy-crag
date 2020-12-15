import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { showNewChannelModal } from '../actions';
import AddRoomModalForm from './AddRoomModalForm';

const AddRoomModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modals.isModal);

  const handleClose = () => dispatch(showNewChannelModal());
  return (
    <Modal show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton className="add_room_modal">
        <Modal.Title>ADD NEW ROOM</Modal.Title>
      </Modal.Header>
      <Modal.Body className="add_room_modal">
        <AddRoomModalForm />
      </Modal.Body>
    </Modal>
  );
};

export default AddRoomModal;
