import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import Root from './components/Root';

import './components/styles/base.css';
import './components/styles/shadows.css';

const render = (Component) =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );

render(Root);
if (module.hot) module.hot.accept('./components/Root', () => render(Root));