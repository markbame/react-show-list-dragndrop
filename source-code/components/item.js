import React, {
	PropTypes
}
from 'react';

export const Item = React.createClass({
	propTypes: {
		item: PropTypes.string.isRequired
	},
	render() {
		return <li>{this.props.item}</li>;
	}
});
