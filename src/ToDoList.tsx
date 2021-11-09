import React, { ChangeEvent, KeyboardEvent } from 'react';
import { TaskType, FilterValuesType } from './App';
import { Button } from 'antd';
import { useState } from 'react';

type TodoListPropsType = {
    title: string,
    id: string,
    tasks: Array<TaskType>
    filter: FilterValuesType
    removeTask: (taskID: string, toDoListID: string) => void
    changeFilter: (filter: FilterValuesType, toDoListID: string) => void
    addTask: (title: string, toDoListID: string) => void
    changeTaskStatus: (taskID: string, isDone: boolean, toDoListID: string) => void
    removeTodoList: (todoListID: string) => void
}

const ToDoList: React.FC<TodoListPropsType> = (props) => {
    const tasksJSXelements = props.tasks.map(t => {
        return (
            <li className={t.isDone === true ? 'is-done' : ''} key={t.id}>
                <input
                    type="checkbox"
                    onChange={(e) => props.changeTaskStatus(t.id, e.currentTarget.checked, props.id)}
                    checked={t.isDone}
                    value={t.title}
                />
                <span>{t.title}</span>
                <Button type="primary" onClick={() => props.removeTask(t.id, props.id)}>X</Button>
            </li>
        )
    })

    const [newTaskTitle, setNewTaskTitle] = useState<string>('');
    const [error, setError] = useState<boolean>(false);

    const addTask = () => {
        const trimmedTitle = newTaskTitle.trim();
        if (trimmedTitle) {
            props.addTask(trimmedTitle, props.id);
            setNewTaskTitle('');
        } else {
            setError(true);
        }
        setNewTaskTitle('');
    }
    const onNewTitleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setError(false);
        setNewTaskTitle(event.currentTarget.value)
    };
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.ctrlKey || e.key === 'Enter') {
            addTask();
        }
    };
    const removeTodoList = () =>
        props.removeTodoList(props.id);
    const setAll = () => props.changeFilter('all', props.id);
    const setActive = () => props.changeFilter('active', props.id);
    const setCompleted = () => props.changeFilter('completed', props.id);
    const classForAll = props.filter === 'all' ? 'active-filter' : '';
    const classForActive = props.filter === 'active' ? 'active-filter' : '';
    const classForCompleted = props.filter === 'completed' ? 'active-filter' : '';
    const errorMessage = error ? <div style={{ backgroundColor: 'red', color: 'white', fontWeight: 900, textAlign: 'center' }}>Title is required</div> : '';
    return (
        <div className='toDoList'>
            <div>
                <h3>{props.title}</h3>
            </div>
            <button onClick={removeTodoList}>X</button>
            <input
                className={error ? 'error' : ''}
                onChange={onNewTitleChangeHandler}
                value={newTaskTitle}
                onKeyPress={onKeyPressHandler}
                placeholder="Write something"
            />
            {errorMessage}
            <button onClick={addTask}>+</button>
            <ul>
                {tasksJSXelements}
            </ul>
            <div>
                <button
                    className={classForAll}
                    onClick={setAll}>All</button>
                <button
                    className={classForActive}
                    onClick={setActive}>Active</button>
                <button
                    className={classForCompleted}
                    onClick={setCompleted}>Completed</button>
            </div>
        </div>
    )
}
export default ToDoList;
