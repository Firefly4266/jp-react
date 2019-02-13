import React, { Component } from 'react';
import Todos from './Todos';
import AddForm from './AddForm';

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'Feed the Tree' },
      { id: 2, content: 'Adopt more Trees' }
    ]
  }

  addTask = (todo)=>{
    todo.id = Math.random();
    //use spread operator to drop in the new todo
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }

  completeTodo = (id)=>{
    let todos = this.state.todos.filter(todo=>{
      return todo.id !== id;
    })
    this.setState({
      todos 
    })
  }

  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos completeTodo= { this.completeTodo } todos={ this.state.todos } />
        <AddForm addTask= {this.addTask} />
      </div>
    );
  }
}

export default App;
