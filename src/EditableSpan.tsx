import React, {ChangeEvent, useState} from "react";

type EditableSpanType = {
    title: string
    setNewTitle: (title: string) => void
}

const EditableSpan = (props: EditableSpanType) => {
    const [title, setTitle] = useState<string>('')
    const [editMode, setEditMode] = useState<boolean>(false);

    const onEditMode = () => setEditMode(true);
    if (props.title) {
        setTitle(props.title);
    }

    const offEditMode = () => {
        setEditMode(false);
        props.setNewTitle(title);
    }

    const changeTitle =(e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    }

    return (
        editMode
        ? <input onBlur={offEditMode} autoFocus onChange={changeTitle} value={title}/>
        : <span onDoubleClick={onEditMode}>{props.title}</span>

    )
}

export default EditableSpan;