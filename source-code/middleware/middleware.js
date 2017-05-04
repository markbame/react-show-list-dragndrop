/*  Mark Bame Martires - May 5, 2017 */
import {
  applyMiddleware
}
from 'redux'
import axios from 'axios'
import {
  RateLimiter
}
from 'limiter'
import _ from 'lodash'
var limiter = new RateLimiter(1, 'second')
var favholder;

exports.middleware = (store) => (next) => (action) => {
  try {
    if(action.type == "GET_SHOWS") {
      const request = axios.get('http://api.tvmaze.com/shows').then(res => {
        store.dispatch({
          type: 'FETCHED_SHOWS',
          'data': res.data
        })
      }).catch(function(error) {
        console.log(error)
      })
    }
    if(action.type == "GET_QUERYSHOWS") {
      limiter.removeTokens(1, function(err, remainingRequests) {
        const request = axios.get('http://api.tvmaze.com/search/shows?q=' +
          action.q).then(res => {
          store.dispatch({
            type: 'FETCHED_SHOWS',
            'data': res.data
          })
        }).catch(function(error) {
          console.log(error)
        })
      });
    }
    if(action.type == "FAVORITE_SHOW") {
      store.dispatch({
        type: 'SAVED_FAVORITE_SHOW',
        'data': action.show
      })
    }
    if(action.type == "UPDATE_FAVORITE_SHOWS") {
      localStorage.setItem('favorites', JSON.stringify(action.list));
    }
    if(action.type == "GET_FAVORITE_SHOWS") {
      const getFavorites = JSON.parse(localStorage.getItem('favorites'))
      if(getFavorites) {
        store.dispatch({
          type: 'GET_FAVORITE_SHOW',
          'data': getFavorites
        })
      }
    }
    next(action)
  }
  catch(e) {
    console.log('error:', e)
  }
}
