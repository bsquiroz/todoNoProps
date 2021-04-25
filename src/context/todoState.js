import React, { useReducer } from "react";
import todoReducer from './todoReducer';
import todoContext from './todoContext';
import {
    OBTENER_TODOS,
    CREAR_TAREA,
    ELIMINAR_TAREA,
    MODIFICAR_TAREA,
    MODIFICAR_TAREA1
} from "../types";

const TodoState = (props) => {
    const todos = [
        { id: 1, nombre: "todo1", descripcion: "des1" },
        { id: 2, nombre: "todo2", descripcion: "des2" },
        { id: 3, nombre: "todo3", descripcion: "des3" },
        { id: 4, nombre: "todo4", descripcion: "des4" },
    ]


    //Estado global de mi aplicacion o solo la parte de todos (tareas)
    const initialState = {
        todos: [],
        editando: null
    };

    const [state, dispatch] = useReducer(todoReducer, initialState);

    const obtenerTodos = () => {
        dispatch({
            type: OBTENER_TODOS,
            payload: todos
        });
    };

    const crearTarea = (tarea) => {
        dispatch({
            type: CREAR_TAREA,
            payload: tarea
        })
    }

    const eliminarTarea = (tarea) => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: tarea
        })
    }

    const modificarTarea = (tarea) => {
        dispatch({
            type: MODIFICAR_TAREA,
            payload: tarea
        })
    }

    const ahoraSiModifico = (tarea) => {
        dispatch({
            type: MODIFICAR_TAREA1,
            payload: tarea
        })
    }


    return (
        <todoContext.Provider
            value={{
                todos: state.todos,
                editando: state.editando,
                obtenerTodos,
                crearTarea,
                eliminarTarea,
                modificarTarea,
                ahoraSiModifico,
            }}
        >
            {props.children}
        </todoContext.Provider>
    )

}

export default TodoState;