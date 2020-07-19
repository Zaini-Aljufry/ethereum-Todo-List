import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TaskContext } from "../context/tasks-context";

const TodoList = (props) => {
  const context = useContext(TaskContext);

  const middleMan = (taskId) =>{
    props.toggleCompleted(taskId)
  }

  return (
    <React.Fragment>
      <ul className="container">
        {context.tasks.map((task) => (
          <TodoItem
            key={task.id}
            id={task.id}
            content={task.content}
            completed={task.completed}
            toggleCompleted={middleMan}
          />
        ))}
      </ul>
      <ul id="completedTaskList" className="list-unstyled"></ul>
    </React.Fragment>
  );
};

export default TodoList;
