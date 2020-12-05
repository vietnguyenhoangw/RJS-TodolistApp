 import { combineReducers } from 'redux';
 import todoListReducers from '../reducers/TodoListReducer';

 const rootReducer = combineReducers({
    todoListReducers
 });

 export default rootReducer;