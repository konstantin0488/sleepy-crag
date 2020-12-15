import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware, compose } from 'redux';
import io from 'socket.io-client';
import rootReducer from './reducers/index';
import App from './components/App';
import UserNameContext from './components/UserNameContext';
import {
  addMessage, addChannel, removeChannel, renameChannel, setCurrentChannelId,
} from './actions/index';

const app = (gon, userName) => {
  const gonChannelsArray = Object.values(gon.channels);
  // eslint-disable-next-line arrow-body-style
  const gonInitial = gonChannelsArray.reduce((acc, channel) => {
    return { ...acc, [channel.id]: channel };
  }, {});

  const initialState = {
    channels: { ...gonInitial },
    messages: [...gon.messages],
    currentChannelId: { currentId: gon.currentChannelId },
  };

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk)),
  );

  const socket = io();
  socket.on('newMessage', ({ data }) => store.dispatch(addMessage(data.attributes)));
  socket.on('newChannel', ({ data }) => store.dispatch(addChannel(data.attributes)));
  socket.on('renameChannel', ({ data }) => store.dispatch(renameChannel(data.attributes)));
  socket.on('removeChannel', ({ data }) => {
    store.dispatch(setCurrentChannelId(1));
    store.dispatch(removeChannel(data.id));
  });

  ReactDOM.render(
    /* eslint-disable-next-line react/jsx-filename-extension */
    <Provider store={store}>
      <UserNameContext.Provider value={userName}>
        <App />
      </UserNameContext.Provider>
    </Provider>,
    /* eslint-enable */
    document.getElementById('chat'),
  );
};

export default app;
