import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {

    const onClickButton = () => {
        //props.setOpenModal(prevState => !prevState);
        props.setOpenModal(!props.openModal);
    }

    return (
        <button
            className={"CreateTodoButton " + (props.openModal ? "CreateTodoButton-Modal-Opened" : "CreateTodoButton-Modal-Closed")}
            onClick={onClickButton}
            >+
        </button>
    );
}

export { CreateTodoButton };
