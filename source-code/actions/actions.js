exports.getShows = () => {
  return {
    type: 'GET_SHOWS'
  }
}

exports.getQueryShows = (q) => {
  return {
    type: 'GET_QUERYSHOWS',
    q
  }
}

exports.favoriteShows = (show) => {
  return {
    show,
    type: 'FAVORITE_SHOW'
  }
}

exports.getFavoriteShows = () => {
  return {
    type: 'GET_FAVORITE_SHOWS'
  }
}

exports.updateFavoriteShows = (list) => {
  return {
    list,
    type: 'UPDATE_FAVORITE_SHOWS'
  }
}
