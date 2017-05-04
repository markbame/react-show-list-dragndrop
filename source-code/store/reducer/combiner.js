import {
  combineReducers
}
from 'redux'
import {
  routerReducer
}
from 'react-router-redux'
import shows from './shows'
import favorites from './favorites'

export default combineReducers({
  favorites,
  shows,
  routing: routerReducer
})
