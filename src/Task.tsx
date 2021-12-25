import React, { useCallback } from 'react';
import { TaskType } from './App';
import EditableSpan from './EditableSpan';
import { Checkbox, IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';


type TaskPropsType = {
    key: string
    todoListID: string
    task: TaskType
    changeTaskTitle: (taskID: string, title: string) => void
    changeTaskStatus: (taskID: string, isDone: boolean) => void
    removeTask: (taskID: string) => void
}

export const Task = React.memo((props : TaskPropsType) => {
    console.log('task')

    const {id, title, isDone} = props.task;

    const changeTaskTitle = useCallback((title: string) => {
        props.changeTaskTitle(id, title)
    }, [id, props.changeTaskTitle])

    return (
        <div className={isDone === true ? 'is-done' : ''} key={id}>
            <Checkbox
                checked={isDone}
                onChange={(e) => props.changeTaskStatus(id, e.currentTarget.checked)} />
            {/* <input
            type="checkbox"
            onChange={(e) => props.changeTaskStatus(t.id, e.currentTarget.checked, props.id)}
            checked={t.isDone}
            value={t.title}
        /> */}
            <EditableSpan title={title} setNewTitle={changeTaskTitle} />
            <IconButton onClick={() => props.removeTask(props.task.id)}>
                <Delete />
            </IconButton>
        </div>
    )
})