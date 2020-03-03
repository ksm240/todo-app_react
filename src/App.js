import React from 'react';

import List from './List';
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
      todolist: [ ...this.state.todolist, { title: title , index: this.state.nextId + 1, done: false } ],
      nextId: this.state.nextId + 1
    });
  };

  updateStatus = index => {
    const { todolist } = this.state;
    const updateTodolist = [...todolist].map(todo =>
      (todo.index === index.id ? {...todo, done: !todo.done} : todo)
    );
    this.setState({ todolist: updateTodolist });
  }

  removeTodo = index => {
    this.setState({
      todolist: this.state.todolist.filter(todo => (todo.index !== index.id))
    });
  }

  render() {
    const { todolist } = this.state;
    return (
      <>
        <h1 className="h2">TODO App</h1>
        <AddTodo addTodo={ this.addTodo } />
        <h2 className="h3">List</h2>
        <div className="mt-3">
          <List removeTodo={ this.removeTodo } todolist={ todolist } updateStatus={ this.updateStatus } />
        </div>
      </>
    );
  }
}

export default App;
