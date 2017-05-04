/*  Mark Bame Martires - May 5, 2017 */
import {
  bindActionCreators
}
from 'redux'
import {
  connect
}
from 'react-redux'
import * as Actions from '../actions/actions'
import searchShows from '../components/search-show'

function mapStateToProps(state) {
  return {
    shows: state.shows,
    favorites: state.favorites
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}
export const showsMap = connect(mapStateToProps, mapDispatchToProps)(
  searchShows)
