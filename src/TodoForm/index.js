import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState("");
    const { addTodo, setOpenModal } = React.useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onAdd = (event) => {
        event.preventDefault();
        if (newTodoValue.length <= 0) return;
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return (
        <form onSubmit={onAdd} className="TodoForm-buttonContainer">
            <label>...</label>
            <textarea
                placeholder="Ingresar texto"
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button
                    className="TodoForm-button TodoForm-button-cancel"
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    className="TodoForm-button TodoForm-button-add"
                    type="submit"
                >
                    Aceptar
                </button>
            </div>
        </form>
    );
}

export { TodoForm };
