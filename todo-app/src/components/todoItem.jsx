import React, { useState } from 'react';

const TodoItem = (props) => {
    const [todoItem, setTodoItem] = useState(props.data);
    return(
        <>
        <input type="checkbox" checked={props.data.isDone} onChange={}/> {" "}
        <span>{props.data.task}</span>
      </>
    );
};

export default TodoItem;

