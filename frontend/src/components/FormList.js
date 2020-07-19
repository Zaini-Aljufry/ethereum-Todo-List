import React, { useRef } from "react";



const FormList = (props) => {
  const task = useRef();
  

  const submitHandler = (e) => {
    e.preventDefault();
    props.createTask(task.current.input);
  };

  const changeHandler = (e) => {
    task.current.input = e.target.value;
  };
  return (
    <React.Fragment>
      <form className="container" onSubmit={submitHandler}>
        <input
          id="newTask"
          ref={task}
          type="text"
          className="form-control"
          placeholder="Add task..."
          onChange={changeHandler}
          required
        />
        <input type="submit" hidden={true} />
      </form>
    </React.Fragment>
  );
};

export default FormList
