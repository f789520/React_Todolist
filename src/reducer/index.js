import { combineReducers } from 'redux';

import filterReducer from './filter.js';
import todosReducer from './todos.js';

const todoApp = combineReducers({
    filterReducer,
    todosReducer
});

export default todoApp;