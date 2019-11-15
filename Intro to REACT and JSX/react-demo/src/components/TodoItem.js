import React, { Component } from 'react';

class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      borderBottom: '1px #ccc dotted',
      padding: '0.5em',
      textDecoration: this.props.todo.completed ? 
        'line-through' : 'none',
    }
  }

  toggle = (e) => {
    console.log(this.props)
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}> 
        <p>
          <input 
            type="checkbox" 
            onChange={this.props.toggleComplete.bind(this, id)}
            className="checkbox"  
          />
          {title}
          <button onClick={this.props.delTodo.bind(this, id)}>x</button>
        </p>
      </div>
    )
  }
}

export default TodoItem;