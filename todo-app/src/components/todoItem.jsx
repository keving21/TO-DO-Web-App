import React, { useEffect, useState } from 'react';

const TodoItem = (props) => {
    const [todoItem, setTodoItem] = useState(props.data);
    const [isDirty, setDirty] = useState(false);

    useEffect(() => {
        if(isDirty){
            fetch(`http://localhost:8080/api/todoItems/${todoItem.id}`, {
            method: `PUT`,
            headers:{
                "content-type": "application/json",
            },
            body: JSON.stringify(todoItem),
        }).then(response => response.json()).then(data => {
            setDirty(false);
            setTodoItem(data);
        });    
        }
    }, [todoItem, isDirty]);
    
    return(
        <>
        <input type="checkbox" checked={todoItem.isDone}
         onChange={() =>{
             setDirty(true);
             setTodoItem({ ...todoItem,isDone: !todoItem.isDone});
         }}
        />
        <span>{todoItem.task}</span>
      </>
    );
};

export default TodoItem;

