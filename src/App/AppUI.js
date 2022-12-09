import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        toogleCompleteTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {error && <p>Hubo un error.</p>}
                {loading && <p>Cargando...</p>}
                {!loading && !searchedTodos.lenght && (
                    <p>Crea tu primer TODO!</p>
                )}

                {searchedTodos.map((todo) => (
                    <TodoItem
                        text={todo.text}
                        key={todo.text}
                        completed={todo.completed}
                        onToogleCompleteTodo={() =>
                            toogleCompleteTodo(todo.text)
                        }
                        onDeleteTodo={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
            <CreateTodoButton
                setOpenModal={setOpenModal}
                openModal={openModal}
            />
        </React.Fragment>
    );
}

export { AppUI };
