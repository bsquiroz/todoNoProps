import React, { useContext } from 'react'
import todoContext from "../context/todoContext";

const Todo = ({ todo }) => {
    const { nombre, descripcion } = todo;

    const todoContextC = useContext(todoContext);
    const { eliminarTarea, modificarTarea, editando } = todoContextC;

    const manejadorModificador = (todo) => {
        modificarTarea(todo);
    }
    return (
        <div>
            <div>
                <p>{nombre}</p>
                <p><small>{descripcion}</small></p>
            </div>
            <div>
                <button
                    onClick={() => manejadorModificador(todo)}
                >Modificar</button>
                <button
                    onClick={() => eliminarTarea(todo)}
                >Eliminar</button>
            </div>
            <hr />
        </div>
    )
}

export default Todo
