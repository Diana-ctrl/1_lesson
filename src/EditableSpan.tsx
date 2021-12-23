import { TextField } from "@material-ui/core";
import React, { ChangeEvent, useState } from "react";

type EditableSpanType = {
    title: string
    setNewTitle: (title: string) => void
}

const EditableSpan = React.memo((props: EditableSpanType) => {
    const [title, setTitle] = useState<string>(props.title)
    const [editMode, setEditMode] = useState<boolean>(false);

    const onEditMode = () => setEditMode(true);


    const offEditMode = () => {
        setEditMode(false);
        props.setNewTitle(title);
    }

    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    }

    return (
        editMode
            ? <TextField onBlur={offEditMode} autoFocus onChange={changeTitle} value={title} />
            : <span onDoubleClick={onEditMode}>{props.title}</span>

    )
});

export default EditableSpan; 