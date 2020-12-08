import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';
import App from './components/App';
import UserNameContext from './components/UserNameContext';
import { addMessage } from './actions/index';

const app = (gon, userName, socket) => {
  const initialState = {
    channels: { ...gon.channels },
    messages: [...gon.messages],
    currentChannelId: { currentId: gon.currentChannelId },
  };

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk)),
  );

  socket.on('newMessage', ({ data }) => {
    console.log(data.attributes);
    store.dispatch(addMessage(data.attributes));
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
