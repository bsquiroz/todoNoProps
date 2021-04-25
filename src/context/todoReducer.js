import {
    OBTENER_TODOS,
    CREAR_TAREA,
    ELIMINAR_TAREA,
    MODIFICAR_TAREA,
    MODIFICAR_TAREA1,
} from "../types"

export default (state, action) => {
    switch (action.type) {
        case OBTENER_TODOS:
            return {
                ...state,
                todos: action.payload
            };
        case CREAR_TAREA:
            return {
                ...state,
                todos: [...state.todos, action.payload],
                editando: null
            }
        case ELIMINAR_TAREA:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload.id)
            }

        case MODIFICAR_TAREA:
            return {
                ...state,
                editando: action.payload,
                todos: state.todos.map((todo) => todo.id === action.payload.id ? action.payload : todo),
            }
        case MODIFICAR_TAREA1:
            return {
                ...state,
                todos: state.todos.map((todo) => todo.id === action.payload.id ? action.payload : todo),
                editandp: null
            }
        default:
            return state;
    }
};
