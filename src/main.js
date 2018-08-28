import * as React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'
import {Provider} from 'react-redux'
import rootReducer from './reducers'
import {fetchAllPosts} from './actions'
import Router from './router/Router'
import './main.css'

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(ReduxThunk),
  )
)

store.dispatch(fetchAllPosts())

ReactDOM.render(
  <Provider store={store}>
    <Router/>
  </Provider>,
  document.getElementById("root")
)
