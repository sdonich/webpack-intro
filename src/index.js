import { Greater } from './greeter'

import styles from './style.scss';
import logo from './webpack.png';




const img = document.createElement('img');
img.src = logo;
img.className = styles.logo;

const app = document.querySelector('#app');

const h1 = document.createElement('h1');
h1.textContent = 'Meeting Webpack';
h1.className = styles.title;


app.appendChild(img);

app.appendChild(h1);

