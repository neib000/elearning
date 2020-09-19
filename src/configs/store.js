import { createStore, combineReducers, applyMiddleware } from "redux";
import courses from "../redux/reducers/courses";
//npm i redux-thunk
import credentials from "../redux/reducers/credentials";
import thunk from "redux-thunk";
//create root reducer
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({
  courses,
  credentials,
});

export const store = createStore(
  reducer,
  
  //khi applyMiddleware basic sẽ bị lỗi
  applyMiddleware(thunk),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  
);
