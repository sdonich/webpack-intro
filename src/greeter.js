import React from 'react';
import logo from './webpack.png';
import styles from './style.scss';


export class Greeter extends React.Component {
  render() {
    return (
      <div>
        <img className={styles.logo} src={logo} />
        <h1>Hello Webpack and React</h1>
      </div>
    );
  }
}

