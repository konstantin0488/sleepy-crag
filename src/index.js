// @ts-check
// import faker from 'faker';ß
// import cookies from 'js-cookie';
// import io from 'socket.io-client';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import '../assets/application.scss';
import gon from 'gon';
import indexMain from './indexMain';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

indexMain(gon);
