import React from 'react';
import { TaskType, FilterValuesType } from './App';
import { Button } from 'antd';
import AddItemForm from './AddItemForm';
import EditableSpan from './EditableSpan';

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
    changeToDoListTitle: (title: string, todoListID: string) => void
    changeTaskTitle: (taskID: string, title: string, toDoListID: string) => void
}

const ToDoList: React.FC<TodoListPropsType> = (props) => {

    const tasksJSXelements = props.tasks.map(t => {
        const changeTaskTitle = (title: string) => {
            props.changeTaskTitle(t.id, title, props.id)
        }

        return (
            <li className={t.isDone === true ? 'is-done' : ''} key={t.id}>
                <input
                    type="checkbox"
                    onChange={(e) => props.changeTaskStatus(t.id, e.currentTarget.checked, props.id)}
                    checked={t.isDone}
                    value={t.title}
                />
                <EditableSpan title={t.title} setNewTitle={changeTaskTitle} />
                <Button type="primary" onClick={() => props.removeTask(t.id, props.id)}>X</Button>
            </li>
        )
    })

    const addTask = (title: string) => {
        props.addTask(title, props.id);
    }

    const removeTodoList = () => props.removeTodoList(props.id);
    const setAll = () => props.changeFilter('all', props.id);
    const setActive = () => props.changeFilter('active', props.id);
    const setCompleted = () => props.changeFilter('completed', props.id);
    const classForAll = props.filter === 'all' ? 'active-filter' : '';
    const classForActive = props.filter === 'active' ? 'active-filter' : '';
    const classForCompleted = props.filter === 'completed' ? 'active-filter' : '';

    const changeToDoListTitle = (title: string) => {
        props.changeToDoListTitle(title, props.id)
    }

    return (
        <div className='toDoList'>
            <div>
                <h3><EditableSpan title={props.title} setNewTitle={changeToDoListTitle} /></h3>
            </div>
            <button onClick={removeTodoList}>X</button>
            <AddItemForm addItem={addTask} />
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
