import React from 'react';
import { render } from 'react-dom';

import { List } from './List';
import { AddTodo } from './AddTodo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todolist: [],
      nextId: 0
    };
  }

  addTodo = title => {
    this.setState({
      todolist: [ ...this.state.todolist, { title: title , index: this.state.nextId + 1, done: false} ],
      nextId: this.state.nextId + 1
    });
  };

  updateStatus = index => {
    const todoItems = this.state.todolist.slice();
    const todoItem = todoItems[index - 1];
    todoItem.done = !todoItem.done;
    todoItems[index - 1] = todoItem;
    const statusLabel = todoItem.done? 'incompleted' : 'completed';
    console.log(statusLabel);
    this.setState({todoItems});
  }

  removeTodo = id => {
    this.setState({
      todolist: this.state.todolist.filter(todo => (todo.id !== id))
    })
  }

  render() {
    const todolist = this.state.todolist;
    const addTodo = this.addTodo;
    return (
      <>
        <h1>TODO App</h1>
        <AddTodo addTodo={addTodo} />
        <h2>List</h2>
        <ul>
          <List removeTodo={this.removeTodo} todolist={todolist} updateStatus={this.updateStatus} />
        </ul>
      </>
    );
  }
}

export default App;
