// @ts-check
import faker from 'faker';
import cookies from 'js-cookie';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import '../assets/application.scss';
import gon from 'gon';
import app from './app';

const startLoader = () => {
  const loader = document.querySelector('.wrap');
  window.onload = () => {
    setTimeout(() => {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    }, 1500);
  };
};
startLoader();

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

if (!cookies.get('userName')) {
  const randomName = faker.name.findName();
  cookies.set('userName', randomName);
}
const userName = cookies.get('userName');

app(gon, userName);
