import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from '../componen/app'
import reducers from './reducer'
import ReduxPromise from 'redux-promise'

ReactDOM.render(
<Provider store={createStore(reducers , applyMiddleware(ReduxPromise))}
<App/>
</Provider>, document.getElementById('app')
)