import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import visibilityFilter from './VisibilityFilter';
import choreWheelList from './ChoreWheelList';

const choreWheelApp = combineReducers({
  choreWheelList,
  visibilityFilter
});

const store = createStore(
  choreWheelApp,
  applyMiddleware(thunk)
);

export default store;
