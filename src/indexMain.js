import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import App from './components/App';

const indexMain = (gon) => {
  const initialState = {
    channels: { ...gon.channels },
    messages: [...gon.messages],
    currentChannelId: gon.currentChannelId,
  };

  const store = createStore(
    rootReducer,
    initialState,
    /* eslint-disable no-underscore-dangle */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    /* eslint-enable */
  );

  ReactDOM.render(
    /* eslint-disable-next-line react/jsx-filename-extension */
    <Provider store={store}>
      <App />
    </Provider>,
    /* eslint-enable */
    document.getElementById('chat'),
  );
};

export default indexMain;
