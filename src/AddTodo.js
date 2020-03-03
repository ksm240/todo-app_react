import React from 'react';

export class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", done: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = ev => {
    const title = ev.target.value;
    this.setState( { title } );
  }

  handleSubmit = ev => {
    ev.preventDefault();
    const { title, done } = this.state;
    this.props.addTodo(title, done);
    this.setState({ title: "", done: "" });
  }


  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <div className="form-group form-inline">
          <input type="text" className="form-control" value={ this.state.title } onChange={ this.handleChange }/>
          <button type="submit" className="btn btn-primary ml-2">Add todo</button>
        </div>
      </form>
    )
  }
}
