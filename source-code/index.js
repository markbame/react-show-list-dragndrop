import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import common from './style/style.scss'
import { store } from './store/store'
import ShowRoute from './route/route'

ReactDOM.render(
  <Provider store={store}>
    <ShowRoute />
  </Provider>
, document.querySelector('#container'))
