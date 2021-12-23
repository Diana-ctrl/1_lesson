import React, { useCallback } from 'react';
import { TaskType } from './App';
import EditableSpan from './EditableSpan';
import { Checkbox, IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';


type TaskPropsType = {
    key: string
    todoListID: string
    task: TaskType
    changeTaskTitle: (taskID: string, title: string, toDoListID: string) => void
    changeTaskStatus: (taskID: string, isDone: boolean, toDoListID: string) => void
    removeTask: (taskID: string, toDoListID: string) => void
}

export const Task = React.memo((props: TaskPropsType) => {

    const changeTaskTitle = useCallback((title: string) => {
        props.changeTaskTitle(props.task.id, title, props.todoListID)
    }, [props.task.id, props.todoListID, props.changeTaskTitle])

    return (
        <div className={props.task.isDone === true ? 'is-done' : ''} key={props.task.id}>
            <Checkbox
                checked={props.task.isDone}
                onChange={(e) => props.changeTaskStatus(props.task.id, e.currentTarget.checked, props.todoListID)} />
            {/* <input
            type="checkbox"
            onChange={(e) => props.changeTaskStatus(t.id, e.currentTarget.checked, props.id)}
            checked={t.isDone}
            value={t.title}
        /> */}
            <EditableSpan title={props.task.title} setNewTitle={changeTaskTitle} />
            <IconButton onClick={() => props.removeTask(props.task.id, props.todoListID)}>
                <Delete />
            </IconButton>
        </div>
    )
})