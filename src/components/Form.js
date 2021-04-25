import React, { useEffect, useState, useContext } from 'react';
import todoContext from "../context/todoContext";

const initialState = {
    nombre: "",
    descripcion: ""
}

const Form = () => {

    const todosContext = useContext(todoContext);
    const { obtenerTodos, crearTarea, editando, modificarTarea, ahoraSiModifico } = todosContext;

    const [valores, setValores] = useState(initialState);
    const { nombre, descripcion } = valores;

    useEffect(() => {
        obtenerTodos();
    }, [])

    useEffect(() => {
        if (editando) {
            setValores(editando);
        }
    }, [editando])

    const manejadorInputs = (e) => {
        setValores({
            ...valores,
            [e.target.name]: e.target.value
        })
    }

    const manejadorFormulario = (e) => {
        e.preventDefault();

        if (nombre.trim() === "" || descripcion.trim() === "") {
            return;
        }

        if (editando) {
            ahoraSiModifico(valores)
        } else {
            valores.id = Date.now();
            crearTarea(valores);
        }
        setValores(initialState);
    }
    return (
        <form
            onSubmit={manejadorFormulario}
        >
            <input
                type="text"
                placeholder="nombre de la tarea"
                value={nombre}
                onChange={(e) => manejadorInputs(e)}
                name="nombre"
            />
            <input
                type="text"
                placeholder="breve descripción"
                value={descripcion}
                onChange={(e) => manejadorInputs(e)}
                name="descripcion"
            />
            <input
                type="submit"
                value={editando ? "Editar tarea" : "Añadir tarea"}
            />
        </form>
    )
}

export default Form
