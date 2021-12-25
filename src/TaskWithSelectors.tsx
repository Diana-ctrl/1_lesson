import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppRootStateType } from './store/store';
import { ChangeTaskStatusAC, ChangeTaskTitleAC, RemoveTaskAC } from './store/tasks-reducer';
import { TaskType } from './App';
import EditableSpan from './EditableSpan';
import { Checkbox, IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';


type TaskPropsType = {
    key: string
    todoListID: string
    taskID: string
}

export const TaskWithSelectors = React.memo(({ todoListID, taskID }: TaskPropsType) => {
    const task = useSelector<AppRootStateType, TaskType>(state => state.tasks[todoListID].filter(t => t.id === taskID)[0]);
    let dispatch = useDispatch();


    const changeTaskTitle = useCallback((title: string) => {
        dispatch(ChangeTaskTitleAC(task.id, title, todoListID));
    }, [taskID, todoListID])

    return (
        <div className={task.isDone === true ? 'is-done' : ''} key={taskID}>
            <Checkbox
                checked={task.isDone}
                onChange={(e) => {
                    return dispatch(ChangeTaskStatusAC(taskID, e.currentTarget.checked, todoListID))}
                    } />
            {/* <input
            type="checkbox"
            onChange={(e) => props.changeTaskStatus(t.id, e.currentTarget.checked, props.id)}
            checked={t.isDone}
            value={t.title}
        /> */}
            <EditableSpan title={task.title} setNewTitle={changeTaskTitle} />
            <IconButton onClick={() => dispatch(RemoveTaskAC(taskID, todoListID))}>
                <Delete />
            </IconButton>
        </div>
    )
})
//Вопрос!!e.currentTarget.checked