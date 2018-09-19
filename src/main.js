import * as React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'
import {Provider} from 'react-redux'
import rootReducer from './reducers'
import Router from './router/Router'
import './main.css'
import {fetchPosts, fetchLogUser} from './actions'

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(ReduxThunk),
  )
)

store.dispatch(fetchPosts());
store.dispatch(fetchLogUser());

render(
  <Provider store={store}>
    <Router/>
  </Provider>,
  document.getElementById('app')
)
