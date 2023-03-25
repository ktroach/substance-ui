import { render } from 'react-dom';
import { Root } from './Root';
import { HashRouter } from 'react-router-dom';

import './index.css';
import './substance';

render(
  <HashRouter>
    <Root />
  </HashRouter>,
  document.getElementById('root'),
);
