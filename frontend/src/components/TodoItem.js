import React from "react";

const TodoItem = (props) => {
  const clickHandler= () =>{
    props.toggleCompleted(props.id)
  }
  return (
    <React.Fragment>
      <li className="todo-item" key={props.id}>
        <div className="todo-item__info">
          <input
            type="checkbox"
            name={props.id}
            defaultChecked={props.completed}
            onClick={clickHandler}
          />
          <span>{props.content}</span>
        </div>
      </li>
    </React.Fragment>
  );
};

export default TodoItem;
