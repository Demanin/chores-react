import { applyMiddleware, combineReducers, createStore } from 'redux';
import choreWheelList from 'src/Reducers/ChoreWheelList';
import thunk from 'redux-thunk';
import userList from 'src/Reducers/UserList';
import visibilityFilter from 'src/Reducers/VisibilityFilter';

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
