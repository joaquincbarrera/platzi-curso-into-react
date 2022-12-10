import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";

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
                {error && <TodosError />}
                {loading &&
                    new Array(4)
                        .fill()
                        .map((item, index) => <TodosLoading key={index} />)}
                {!loading && !searchedTodos.length && <EmptyTodos />}

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
