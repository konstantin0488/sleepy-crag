/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { idCurrentChannel } from '../actions';

const ChannelList = () => {
  const dispatch = useDispatch();
  const allChannel = useSelector((state) => state.channels);
  const allChannelArray = Object.values(allChannel);

  const setChannelId = (channelId) => () => {
    dispatch(idCurrentChannel(channelId));
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
                <div className="bd-highlight">
                  <button type="button" className="button_room btn btn-block" onClick={setChannelId(channel.id)}>{channel.name}</button>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="card-footer">
        <a href="#" className="button_add btn btn-block">ADD ROOM</a>
      </div>
    </>
  );
};

export default ChannelList;
