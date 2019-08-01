import { applyMiddleware, combineReducers, createStore } from 'redux';
import choreWheelList from './ChoreWheelList';
import thunk from 'redux-thunk';
import userList from './UserList';
import visibilityFilter from './VisibilityFilter';

const choreWheelApp = combineReducers({
  choreWheelList,
  userList,
  visibilityFilter,
});

const store = createStore(
  choreWheelApp,
  applyMiddleware(thunk)
);

export default store;
