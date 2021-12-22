import React, { ChangeEvent, KeyboardEvent } from 'react';
import { useState } from 'react';
import { Button } from '@material-ui/core/';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';


type AddItemFormPropsType = {
    addItem: (title: string) => void
}

const AddItemForm = React.memo((props: AddItemFormPropsType) => {
    console.log('Add Item Form');

    const [newTaskTitle, setNewTaskTitle] = useState<string>('');
    const [error, setError] = useState<boolean>(false);

    // const errorInputStyle = { border: '2px solid red', outline: 'none' }

    const onNewTitleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setError(false);
        setNewTaskTitle(event.currentTarget.value)
    };
    // const errorMessageStyle = error ? <div style={{ backgroundColor: 'red', color: 'white', fontWeight: 900, textAlign: 'center' }}>Title is required</div> : '';

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
            <TextField
                error={error}
                // style={error ? errorInputStyle : undefined}
                variant='outlined'
                label='Enter title...'
                onChange={onNewTitleChangeHandler}
                value={newTaskTitle}
                onKeyPress={onKeyPressHandler}
                helperText={error ? 'Title is required' : ''}
            />
            {/* {errorMessageStyle} */}
            <Button variant='contained' color='secondary' size='medium'
                startIcon={<SaveIcon />} onClick={addItem}>Save</Button>
        </div>
    )
})
export default AddItemForm;