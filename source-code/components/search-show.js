/*  Mark Bame Martires - May 5, 2017 */
import React from 'react';
import {
	Grid, Row, Col, FormControl
}
from 'react-bootstrap'
import {
	DragDropContext
}
from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend';
import Box from './box';
import ShowDropBox from './favoriteBox';

@DragDropContext(HTML5Backend)
export default class Show extends React.Component {
	constructor(props) {
		super()
		this.handleChange = this.handleChange.bind(this)
		this.shows = this.shows.bind(this)
	}
	componentWillReceiveProps(nextProps) {
      if (nextProps.favorites !== this.props.favorites) {
       	this.props.updateFavoriteShows(nextProps.favorites)
      }
  }
	shows() {
		return this.props.shows.map((show) => {
			return(
				<Box key={Math.random().toString(36)}
					 favoriteShows={this.props.favoriteShows}
					 updateFavoriteShows={this.props.updateFavoriteShows}
					 favoriteList={this.props.favorites}
					 id={show.id ? show.id : show.show.id}
					 name={show.name ? show.name : show.show.name} />
			)
		})
	}
	handleChange(e) {
		if(e.target.value == "") {
			this.props.getShows()
		}
		else {
			this.props.getQueryShows(e.target.value)
		}
		this.setState({
			value: e.target.value
		})
	}
	componentDidMount() {
		this.props.getShows()
		this.props.getFavoriteShows()
	}
	componentWillMount() {
		this.setState({
			value: '',
			favoriteValue: ''
		});
	}
	render() {
		return(
			<div className="wrapper">
	        <Grid>
	          <Row>
	            <Col xs={6} sm={6} md={6}>
									<h3>Available shows</h3>
									<div className="shows">
										<FormControl
					            type="text"
					            value={this.state.value}
					            placeholder="Type to search"
					            onChange={this.handleChange}
					          />
										<div className="showlist">{this.props.shows &&
														this.shows()}
										</div>
									 </div>
	            </Col>
	            <Col xs={6} sm={6} md={6}>
										<h3>Favorite shows</h3>
										<div className="shows">
											<ShowDropBox {...this.props} />
										</div>
	            </Col>
	          </Row>
	        </Grid>
	    </div>
		)
	}
}
