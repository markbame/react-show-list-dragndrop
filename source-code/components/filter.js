import React, {
	PropTypes
}
from 'react'
import ReactDOM from 'react-dom'
import TextFilter from 'react-text-filter'
import {
	List
}
from './list'

const favoriteFilter = filter => favorite => favorite.toLowerCase().indexOf(
	filter.toLowerCase()) !== -1;
const faveFilter = React.createClass({
	getInitialState() {
			return {
				filter: ''
			};
		},
		render() {
			var favs = this.props.favorites.map((show) => {
				return show.name
			})
			const filteredFavorites = this.state.filter ?
				favs.filter(favoriteFilter(this.state.filter)) :
				favs.slice(0);
			return(
				<div>
        <TextFilter className="form-control" placeholder="Type to Search" onFilter={({target: {value: filter}}) => this.setState({filter})} />
        <List items={filteredFavorites} />
      </div>
			);
		}
});

export const Filter = faveFilter
