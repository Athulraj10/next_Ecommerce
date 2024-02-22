import { combineReducers } from "redux";

//import all the reducers...


const appReducer = combineReducers({
  //Add all imports here...

});

const reducers = (state, action) => {
  return appReducer(state, action);
};

export default reducers;