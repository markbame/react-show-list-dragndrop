import React, {
  Component
}
from 'react';
import PropTypes from 'prop-types';
import {
  DropTarget
}
from 'react-dnd';
import {
  Filter
}
from './filter';
import ItemTypes from './itemTypes';

const boxTarget = {
  drop() {
    return {
      name: 'ShowDropBox'
    };
  },
};@
DropTarget(ItemTypes.BOX, boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))
export default class ShowDropBox extends React.Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
  };
  constructor(props) {
    super()
    this.favoriteshows = this.favoriteshows.bind(this)
  }
  favoriteshows() {
    return this.props.favorites.map((show) => {
      return(
        <div key={Math.random().toString(36)} className="list">
          {show.name}
					</div >
      )
    })
  }
  render() {
    const {
      canDrop, isOver, connectDropTarget
    } = this.props;
    const isActive = canDrop && isOver;
    return connectDropTarget(
      <div className="dropbox">
      <Filter {...this.props} />

      </div>
    )
  }
}
