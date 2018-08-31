import * as React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'
import {Provider} from 'react-redux'
import rootReducer from './reducers'
import Router from './router/Router'
import './main.css'
import {fetchAllPosts, fetchLogUser} from './actions'

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(ReduxThunk),
  )
)

store.dispatch(fetchAllPosts());
store.dispatch(fetchLogUser());

ReactDOM.render(
  <Provider store={store}>
    <Router/>
  </Provider>,
  document.getElementById("root")
)
