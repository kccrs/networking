import React from 'react';
import { render } from 'react-dom';
import Application from './components/Application.js';

require('./styles/style');

render(<Application />, document.getElementById('application'));
