import { applyMiddleware, combineReducers, createStore } from 'redux';
import choreWheelList from 'Reducers/ChoreWheelList';
import thunk from 'redux-thunk';
import userList from 'Reducers/UserList';
import visibilityFilter from 'Reducers/VisibilityFilter';

const choreWheelApp = combineReducers({
  choreWheelList,
  userList,
  visibilityFilter,
});

const store = createStore(
  choreWheelApp,
  applyMiddleware(thunk),
);

export default store;
