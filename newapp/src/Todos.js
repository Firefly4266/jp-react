import React from 'react';

const Todos = ({todos, completeTodo})=>{

    const todoList = todos.length ? (
        todos.map(todo =>{
            return(
                <div className="collection-item" key= {todo.id}>
                    <span onClick= {()=>{completeTodo(todo.id)}}>{ todo.content }</span>
                </div>
            )
        })
    ) : (
        <p>You have no more todo's!</p>
    )
    return(
        <div className="todos collection" >
            {todoList}
        </div>
    )
}

export default Todos