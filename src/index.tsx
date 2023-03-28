import React from 'react';
import { render } from 'react-dom';
import { AppShell } from './AppShell';
import { HashRouter } from 'react-router-dom';

import './index.css';

render(
  <HashRouter>
    <AppShell />
  </HashRouter>,
  document.getElementById('root'),
);
