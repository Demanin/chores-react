import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';
import store from './Reducers/Reducer';
import loadUsers from './Actions/loadUsers.js';
import loadWheels from './Actions/loadWheels.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faEye, faEyeSlash, faForward, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faCheck);
library.add(faEye);
library.add(faEyeSlash);
library.add(faForward);
library.add(faPlus);
library.add(faTrash);

const render = () => {
  ReactDOM.render(
    <Provider store={store} state={store.getState()}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}

store.subscribe(render);
render();

store.dispatch(loadUsers);
store.dispatch(loadWheels);

setInterval(() => store.dispatch(loadWheels), 60*1000);

registerServiceWorker();
