import React from "react";

const Operation = (props) => {
    const { addHandler, editHandler, deleteHandler } = props;
    return (<div>
        <span onClick={addHandler}>Add</span>
        <span onClick={editHandler}>Edit</span>
        <span onClick={deleteHandler}>Delete</span>
    </div>);
};

export default Operation;