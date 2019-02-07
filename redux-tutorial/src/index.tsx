import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';

import { Provider } from 'react-redux';
import App from './components/App';
import { rootReducer } from './modules';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
