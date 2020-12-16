// eslint-disable-next-line import/prefer-default-export
export default () => {
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
