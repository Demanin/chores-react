import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import visibilityFilter from './VisibilityFilter';
import choreWheelList from './ChoreWheelList';
import userList from './UserList';

const choreWheelApp = combineReducers({
  choreWheelList,
  userList,
  visibilityFilter
});

const store = createStore(
  choreWheelApp,
  applyMiddleware(thunk)
);

export default store;
