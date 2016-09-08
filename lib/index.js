import React from 'react';
import { render } from 'react-dom';
import Application from './components/Application.js';
import styles from './styles/style.scss'

// require('./style.scss');

render(<Application />, document.getElementById('application'));
