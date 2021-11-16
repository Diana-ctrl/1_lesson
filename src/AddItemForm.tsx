import React, { ChangeEvent, KeyboardEvent } from 'react';
import { useState } from 'react';

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

const AddItemForm = (props: AddItemFormPropsType) => {

    const [newTaskTitle, setNewTaskTitle] = useState<string>('');
    const [error, setError] = useState<boolean>(false);

    const errorInputStyle = { border: '2px solid red', outline: 'none' }
    const onNewTitleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setError(false);
        setNewTaskTitle(event.currentTarget.value)
    };
    const errorMessageStyle = error ? <div style={{ backgroundColor: 'red', color: 'white', fontWeight: 900, textAlign: 'center' }}>Title is required</div> : '';

    const addItem = () => {
        const trimmedTitle = newTaskTitle.trim();
        if (newTaskTitle.trim()) {
            props.addItem(trimmedTitle);
            setNewTaskTitle('');
        } else {
            setError(true);
        }
        setNewTaskTitle('');
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.ctrlKey || e.key === 'Enter') {
            addItem();
        }
    };

    return (
        <div>
            <input
                style ={error ? errorInputStyle : undefined}
                onChange={onNewTitleChangeHandler}
                value={newTaskTitle}
                onKeyPress={onKeyPressHandler}
                placeholder="Enter title..."
            />
            {errorMessageStyle}
            <button onClick={addItem}>+</button>
        </div>
    )
}
export default AddItemForm;