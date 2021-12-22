import React, { useCallback } from 'react';
import { TaskType, FilterValuesType } from './App';
import AddItemForm from './AddItemForm';
import EditableSpan from './EditableSpan';
import { Button, IconButton, ButtonGroup } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import Checkbox from '@material-ui/core/Checkbox';


type TodoListPropsType = {
    title: string
    id: string
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

const ToDoList: React.FC<TodoListPropsType> = React.memo((props: TodoListPropsType) => {
    console.log('Todolist')
    let tasksForTodolist = props.tasks;
    if (props.filter === 'active') {
        tasksForTodolist = props.tasks.filter((t: TaskType) => t.isDone === false)
    } else if (props.filter === 'completed') {
        tasksForTodolist = props.tasks.filter((t: TaskType) => t.isDone === true)
    }

    const tasksJSXelements = tasksForTodolist.map(t => {
        const changeTaskTitle = (title: string) => {
            props.changeTaskTitle(t.id, title, props.id)
        }




        return (
            <li className={t.isDone === true ? 'is-done' : ''} key={t.id}>
                <Checkbox
                    checked={t.isDone}
                    onChange={(e) => props.changeTaskStatus(t.id, e.currentTarget.checked, props.id)}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                {/* <input
                    type="checkbox"
                    onChange={(e) => props.changeTaskStatus(t.id, e.currentTarget.checked, props.id)}
                    checked={t.isDone}
                    value={t.title}
                /> */}
                <EditableSpan title={t.title} setNewTitle={changeTaskTitle} />
                <IconButton onClick={() => props.removeTask(t.id, props.id)}>
                    <Delete />
                </IconButton>
            </li>
        )
    })

    const addTask = useCallback((title: string) => {
        props.addTask(title, props.id);
    }, [props.addTask, props.id])

    const removeTodoList = useCallback(() => props.removeTodoList(props.id), [props.id]);
    const setAll = useCallback(() => props.changeFilter('all', props.id), [props.id, props.changeFilter]);
    const setActive = useCallback(() => props.changeFilter('active', props.id), [props.id, props.changeFilter]);
    const setCompleted = useCallback(() => props.changeFilter('completed', props.id), [props.id, props.changeFilter]);
    // const classForAll = props.filter === 'all' ? 'active-filter' : '';
    // const classForActive = props.filter === 'active' ? 'active-filter' : '';
    // const classForCompleted = props.filter === 'completed' ? 'active-filter' : '';

    const changeToDoListTitle = (title: string) => {
        props.changeToDoListTitle(title, props.id)
    }

    return (
        <div className='toDoList'>
            <div>
                <h3><EditableSpan title={props.title} setNewTitle={changeToDoListTitle} /></h3>
                <IconButton onClick={removeTodoList}>
                    <Delete />
                </IconButton>
            </div>
            <AddItemForm addItem={addTask} />
            <ul>
                {tasksJSXelements}
            </ul>
            <div>
                <ButtonGroup
                    variant={'contained'}
                    size={'small'}>
                    <Button
                        variant={props.filter === 'all' ? 'outlined' : 'contained'}
                        color='secondary'
                        onClick={setAll}>All</Button>
                    <Button
                        variant={props.filter === 'active' ? 'outlined' : 'contained'}
                        color='secondary'
                        onClick={setActive}>Active</Button>
                    <Button
                        variant={props.filter === 'completed' ? 'outlined' : 'contained'}
                        color='secondary'
                        onClick={setCompleted}>Completed</Button>
                </ButtonGroup>
            </div>
        </div>
    )
})
export default ToDoList;
