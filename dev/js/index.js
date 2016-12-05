import { combineReducers, createStore } from 'redux';

//Reducer takes a state & action then returns a new state
//Each normally in their own file
const userReducer = function(state={}, action){
  switch(action.type){
    case 'CHANGE_NAME': {
      state = {...state, name: action.payload}
      break;
    }
    case 'CHANGE_AGE': {
      state = {...state, age: action.payload}
      break;
    }
  }
  return state;
};

const tweetsReducer = function(state=[], action){
  return state;
};

const reducers = combineReducers({
  user: userReducer,
  tweets: tweetsReducer
});

const store = createStore(reducers, {
  user: {
    name: 'Aaron',
    age: 26
  },
  tweets: []
});



store.subscribe(() => {
  console.log('store changed', store.getState())
});

//Actions
store.dispatch({type: 'DEFAULT', payload: ''});
store.dispatch({type: 'CHANGE_NAME', payload: 'Tbo'});
store.dispatch({type: 'CHANGE_AGE', payload: 27});
store.dispatch({type: 'CHANGE_AGE', payload: 28});
