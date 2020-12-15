import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { showChannelRenameModal } from '../actions';
import RenameChannelModalForm from './RenameChannelModalForm';

const RenameChannelModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modals.isModalRename);

  const handleClose = () => dispatch(showChannelRenameModal());

  return (
    <Modal show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton className="add_room_modal">
        <Modal.Title>Edit room name</Modal.Title>
      </Modal.Header>
      <Modal.Body className="add_room_modal">
        <RenameChannelModalForm />
      </Modal.Body>
    </Modal>
  );
};

export default RenameChannelModal;
