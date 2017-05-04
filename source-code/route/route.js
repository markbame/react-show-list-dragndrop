import React from 'react'
import {
  Router, Route, BrowserRouter, Link
}
from 'react-router-dom'
import {
  showsMap
}
from '../connections/connections'

class ShowRoute extends React.Component {
  render() {
    return(
      <BrowserRouter>
          <Route exact path="/"  component={showsMap} />
      </BrowserRouter>
    )
  }
}
export default ShowRoute;
