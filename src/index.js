// @ts-check
import faker from 'faker';
import { io } from 'socket.io-client';
import cookies from 'js-cookie';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import '../assets/application.scss';
import gon from 'gon';
import app from './app';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const socket = io();

if (!cookies.get('userName')) {
  const randomName = faker.name.findName();
  cookies.set('userName', randomName);
}
const userName = cookies.get('userName');

app(gon, userName, socket);
