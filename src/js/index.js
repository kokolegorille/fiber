import 'babel-polyfill';
import '../css/app.css';

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('app')
);

// global.requestAnimationFrame = (callback) => setTimeout(callback);