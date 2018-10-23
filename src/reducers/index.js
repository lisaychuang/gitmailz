import { combineReducers } from "redux";
import gitmail_reducer from './gitmail_reducer';

const rootReducer = combineReducers({
   gitmail: gitmail_reducer
});

export default rootReducer;
