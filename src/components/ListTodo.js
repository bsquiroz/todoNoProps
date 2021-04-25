import React, { useContext } from 'react'
import todoContext from '../context/todoContext'
import Todo from './Todo';

const ListTodo = () => {

    const todosContext = useContext(todoContext);
    const { todos } = todosContext;

    return (
        <div>
            {todos.map((todo) => (
                <Todo
                    key={todo.id}
                    todo={todo}
                />
            )
            )}
        </div>
    )
}

export default ListTodo
