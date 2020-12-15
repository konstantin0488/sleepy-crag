/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import { useSelector, useDispatch } from 'react-redux';
import {
  setCurrentChannelId, showNewChannelModal, showChannelRemoveModal, showChannelRenameModal,
} from '../actions';
import AddRoomModal from './AddRoomModal';
import RemoveChannelModal from './RemoveChannelModal';
import RenameChannelModal from './RenameChannelModal';

const ChannelList = () => {
  const dispatch = useDispatch();
  const allChannel = useSelector((state) => state.channels);
  const allChannelArray = Object.values(allChannel);

  const setChannelId = (channelId) => () => {
    dispatch(setCurrentChannelId(channelId));
  };

  const addRoom = (e) => {
    e.preventDefault();
    dispatch(showNewChannelModal());
  };

  const onClickRemove = (channelId) => (e) => {
    e.preventDefault();
    dispatch(showChannelRemoveModal(channelId));
  };

  const onClickRename = (id) => (e) => {
    e.preventDefault();
    dispatch(showChannelRenameModal(id));
    dispatch(setCurrentChannelId(id));
  };

  return (
    <>
      <div className="card-body contacts_body">
        <div className="card-header">
          ROOMS:
        </div>
        <ul className="contacts">
          {
            allChannelArray.map((channel) => (
              <li className="active" key={channel.id}>
                <AddRoomModal />
                <RemoveChannelModal />
                <RenameChannelModal />
                <div className="bd-highlight d-flex justify-content-between">
                  {
                    !channel.removable
                      ? (
                        <button
                          type="button"
                          className="button_room btn btn-block"
                          onClick={setChannelId(channel.id)}
                        >
                          {channel.name}
                        </button>
                      ) : (
                        <>
                          <div>
                            <button
                              type="button"
                              className="button_room btn btn-block"
                              onClick={setChannelId(channel.id)}
                            >
                              {channel.name}
                            </button>
                          </div>
                          <div className="d-flex justify-content-around align-center">
                            <button
                              type="button"
                              className="button_room btn"
                              onClick={onClickRemove(channel.id)}
                            >
                              <DeleteForeverIcon fontSize="small" />
                            </button>
                            <button
                              type="button"
                              className="button_room btn"
                              onClick={onClickRename(channel.id)}
                            >
                              <EditIcon fontSize="small" />
                            </button>
                          </div>
                        </>
                      )
                  }
                </div>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="card-footer">
        <a href="#" className="button_add btn btn-block" onClick={addRoom}>ADD ROOM</a>
      </div>
    </>
  );
};

export default ChannelList;
