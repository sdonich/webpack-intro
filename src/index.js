import React from 'react';
import ReactDOM from 'react-dom';
import { Greeter } from './greeter.js'
import styles from './style.scss';

ReactDOM.render(
  <Greeter />, document.querySelector('#app')
);