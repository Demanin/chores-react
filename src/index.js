import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';
import store from './Reducers/Reducer';
import loadWheels from './Actions/loadWheels.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}

store.subscribe(render);
render();

store.dispatch(loadWheels);

registerServiceWorker();
