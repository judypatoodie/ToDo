import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    return (
      <li>
        <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
        <span>{ this.props.description }</span>
        <input type="button" value="delete" style={{marginLeft: '20px'}} onClick={ this.props.handleDelete } />
      </li>
    );
  }
}

export default ToDo;
