import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid';
import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Dinner With Wife',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }
  
  toggleComplete = (id) => {
    this.setState({ 
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo; 
      })
    });
  }

  delTodo = (id) => {
    this.setState({ 
      todos: [...this.state.todos].filter(todo => todo.id !== id)
    })
  } 

  addTodo = (title) => {
    const newTodo = { 
      id: uuid.v4(),
      title,
      completed: false
    }
    
    this.setState({
      todos: title ? [...this.state.todos, newTodo] : this.state.todos
    })
    
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo}/>
              <Todos 
                todos={this.state.todos} 
                toggleComplete={this.toggleComplete}
                delTodo={this.delTodo}
              />  
            </React.Fragment>
          )}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    );
  }
}


export default App;
