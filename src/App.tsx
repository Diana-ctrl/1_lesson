import React, { useState } from 'react';
import './App.css';
import ToDoList from './ToDoList';
import AddItemForm from './AddItemForm';
import { AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography } from '@material-ui/core';
import { Menu } from "@material-ui/icons";
import { v1 } from 'uuid';

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean,
}
export type TodoListType = {
    id: string,
    title: string,
    filter: FilterValuesType,
}
export type TasksStateType = {
    [key: string]: Array<TaskType>
}
export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {
    const toDoList_1 = v1();
    const toDoList_2 = v1();

    let [tasks, setTasks] = useState({
        [toDoList_1]: [
            { id: v1(), title: 'HTML', isDone: true },
            { id: v1(), title: 'CSS', isDone: true },
            { id: v1(), title: 'React', isDone: false },
            { id: v1(), title: 'Redux', isDone: false }
        ],
        [toDoList_2]: [
            { id: v1(), title: 'Milk', isDone: true },
            { id: v1(), title: 'Bread', isDone: true },
            { id: v1(), title: 'Bear', isDone: true }
        ]
    });


    let [todoLists, setTodoLists] = useState<Array<TodoListType>>([
        { id: toDoList_1, title: 'What to learn?', filter: 'all' },
        { id: toDoList_2, title: 'What to buy?', filter: 'all' }
    ]);
    let [filter, setFilter] = useState<FilterValuesType>('all')

    const removeTask = (taskID: string, toDoListID: string) => {
    };

    const addTask = (title: string, toDoListID: string) => {
        const newTask: TaskType = {
            id: v1(),
            title, // title: title,
            isDone: false,
        }
        setTasks({
            ...tasks,
            [toDoListID]: [newTask, ...tasks[toDoListID]]
        });
    }
    const changeTaskStatus = (taskID: string, isDone: boolean, toDoListID: string) => {
        setTasks({
            ...tasks,
            [toDoListID]: tasks[toDoListID].map(t => t.id === taskID ? { ...t, isDone } : t)
        });   //isDone = isDone:isDone
    }

    const changeTaskTitle = (taskID: string, title: string, toDoListID: string) => {
        setTasks({
            ...tasks,
            [toDoListID]: tasks[toDoListID].map(t => t.id === taskID ? { ...t, title } : t)
        });   //isDone = isDone:isDone
    }
    const changeFilter = (filter: FilterValuesType, todoListID: string) => {
        setTodoLists(todoLists.map(t => t.id === todoListID ? { ...t, filter } : t));
    }
    const changeToDoListTitle = (title: string, todoListID: string) => {
        setTodoLists(todoLists.map(t => t.id === todoListID ? { ...t, title } : t));
    }
    const removeTodoList = (todoListID: string) => {
        setTodoLists(todoLists.filter(t => t.id !== todoListID));
        delete tasks[todoListID];
    }
    const addTodoList = (title: string) => {
        const todoListID = v1()
        const newTodoList: TodoListType = {
            id: todoListID,
            title,
            filter: 'all'
        }
        setTodoLists([...todoLists, newTodoList])
        setTasks({ [todoListID]: [], ...tasks })
    }
    const todoListsComponents = todoLists.map(t => {
        let tasksForRender: Array<TaskType> = tasks[t.id];
        if (t.filter === 'active') {
            tasksForRender = tasks[t.id].filter((t: TaskType) => t.isDone === false)
        } else if (t.filter === 'completed') {
            tasksForRender = tasks[t.id].filter((t: TaskType) => t.isDone === true)
        }
        return (
            <Grid item>
                <Paper style={{ padding: '15px' }}>
                    <ToDoList
                        key={t.id}
                        id={t.id}
                        filter={t.filter}
                        title={t.title}
                        tasks={tasksForRender}
                        addTask={addTask}
                        removeTask={removeTask}
                        changeTaskStatus={changeTaskStatus}
                        changeFilter={changeFilter}
                        removeTodoList={removeTodoList}
                        changeTaskTitle={changeTaskTitle}
                        changeToDoListTitle={changeToDoListTitle}
                    />
                </Paper>
            </Grid>)
    })

    return (
        <div className='App'>
            <AppBar position="sticky">
                <Toolbar style={{ justifyContent: "space-between" }}>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu />
                    </IconButton>
                    <Typography variant="h6">
                        Todolists
                    </Typography>
                    <Button color="inherit" variant={"outlined"}>Login</Button>
                </Toolbar>
            </AppBar>

            <Container fixed>
                <Grid container style={{ padding: '15px' }}>
                    <AddItemForm addItem={addTodoList} />
                </Grid>
                <Grid container spacing={3}>
                    {todoListsComponents}
                </Grid>
            </Container>
        </div>
    )
}

export default App;
