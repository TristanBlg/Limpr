import * as React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducers from './reducers'
import Router from './router/Router'
import './main.css'

const store = createStore(
	rootReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <Router/>
  </Provider>,
  document.getElementById("root")
)
