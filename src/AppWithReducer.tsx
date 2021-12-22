import React from 'react';
import './App.css';
import ToDoList from './ToDoList';
import { useReducer } from 'react';
import { v1 } from 'uuid';
import AddItemForm from './AddItemForm';
import { AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography } from '@material-ui/core';
import { Menu } from "@material-ui/icons";
import { todolistsReducer, RemoveTodolistAC, AddTodoListAC, ChangeTodolistTitleAC, ChangeFinterAC } from './store/todolists-reducer';
import { tasksReducer, RemoveTaskAC, AddTaskAC, ChangeTaskTitleAC, ChangeTaskStatusAC } from './store/tasks-reducer';

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

function AppWithReducer() {
    console.log('app')
    const toDoList_1 = v1();
    const toDoList_2 = v1();

    let [tasks, dispatchTasks] = useReducer(tasksReducer, {
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

    let [todoLists, dispatchTodoLists] = useReducer(todolistsReducer, [
        { id: toDoList_1, title: 'What to learn?', filter: 'all' },
        { id: toDoList_2, title: 'What to buy?', filter: 'all' }
    ]);

    const removeTask = (taskID: string, toDoListID: string) => {
        dispatchTasks(RemoveTaskAC(taskID, toDoListID));
    };

    const addTask = (title: string, toDoListID: string) => {
        dispatchTasks(AddTaskAC(title, toDoListID));
    }
    const changeTaskStatus = (taskID: string, isDone: boolean, toDoListID: string) => {
        dispatchTasks(ChangeTaskStatusAC(taskID, isDone, toDoListID));
    }

    const changeTaskTitle = (taskID: string, title: string, toDoListID: string) => {
        dispatchTasks(ChangeTaskTitleAC(taskID, title, toDoListID))

    }
    const changeFilter = (filter: FilterValuesType, todoListID: string) => {
        dispatchTodoLists(ChangeFinterAC(todoListID, filter));
    }
    const changeToDoListTitle = (title: string, todoListID: string) => {
        dispatchTodoLists(ChangeTodolistTitleAC(title, todoListID));
    }
    const removeTodoList = (todoListID: string) => {
        dispatchTodoLists(RemoveTodolistAC(todoListID));
        dispatchTasks(RemoveTodolistAC(todoListID));
    }
    const addTodoList = (title: string) => {
        let action = AddTodoListAC(title);
        dispatchTodoLists(action);
        dispatchTasks(action);
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

export default AppWithReducer;
