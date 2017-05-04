import React, {
	PropTypes
}
from 'react';
import {
	Item
}
from './item'

export const List = React.createClass({
	propTypes: {
		items: PropTypes.arrayOf(PropTypes.string).isRequired
	},
	render() {
		const Items = this.props.items.map(item => <Item key={item} item={item} />);
		return <ul>{Items}</ul>;
	}
});
