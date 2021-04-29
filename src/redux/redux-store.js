import { combineReducers, createStore } from "redux";
import productReducer from "./product-reducer";
import profileReducer from "./profile-reducer";
import finalFormReducer from './form-reduser'

let reducers = combineReducers({
  product: productReducer,
  profile: profileReducer,
  finalForm: finalFormReducer,
});

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducers /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */
export default store;
