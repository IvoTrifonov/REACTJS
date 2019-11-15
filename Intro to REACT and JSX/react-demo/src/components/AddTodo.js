import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    title: ''
  }
  
  submit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' })
  }

  change = (e) => this.setState({
    title: e.target.value
  });

  render() {
    return (
      <form onSubmit={this.submit}>
        <input 
          type="text" 
          name="title" 
          placeholder="Add Todo..."
          className="todo-input"
          value={this.state.title}
          onChange={this.change}
        />
        <input 
          type="submit" 
          value="Submit" 
          className="btn"
        />
      </form>
    )
  }
}

export default AddTodo;