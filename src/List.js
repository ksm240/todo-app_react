import React from 'react';

function Item(props) {
  const doneButtonLable = props.done ? 'incompleted' : 'complete';
  const doneClassLabel = props.done ? 'complete' : 'incomplete';
  return <div className={ doneClassLabel }>
      <div className="p-3 border-bottom d-flex justify-content-between align-items-center">
        <div className="list-item-title">
          <span>{ props.title }</span>
        </div>
        <div className="list-buttons">
          <button className="btn btn-success" onClick={ () => props.updateStatus(props) }>{ doneButtonLable }</button>
          <button className="btn btn-danger ml-2" onClick={ () => props.removeTodo(props) }>delete</button>
        </div>
      </div>
    </div>
}

export default function List(props) {
  const todoList = props.todolist;
  const listItem = todoList.map((elem) =>
    <Item key={ elem.index } id={ elem.index } title={ elem.title } done={ elem.done } updateStatus={ props.updateStatus } removeTodo={ props.removeTodo } />
  );
  return (
    <>
    {listItem}
    </>
  )
}
