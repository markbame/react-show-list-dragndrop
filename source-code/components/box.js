import React, {
  Component
}
from 'react';
import PropTypes from 'prop-types';
import {
  DragSource
}
from 'react-dnd';
import ItemTypes from './itemTypes';

const boxSource = {
  beginDrag(props) {
      return {
        name: props.name,
      };
    },
    endDrag(props, monitor) {
      const item = monitor.getItem();
      const dropResult = monitor.getDropResult();
      if(dropResult) {
        if(!_.find(props.favoriteList, item)) {
          props.favoriteShows(item);
        }
        else {
          window.alert(
            `${item.name} is already in your list of favorites!`,
          );
        }
      }
    },
};

@
DragSource(ItemTypes.BOX, boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))
export default class Box extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  };

  render() {
    const {
      isDragging, connectDragSource
    } = this.props;
    const {
      name
    } = this.props;
    return(
      connectDragSource(
        <div className="list">
          {name}
        </div>
      )
    );
  }
}
