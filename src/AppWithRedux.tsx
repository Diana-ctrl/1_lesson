import React, { useCallback } from 'react';
import './App.css';
import ToDoList from './ToDoList';
import AddItemForm from './AddItemForm';
import { AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography } from '@material-ui/core';
import { Menu } from "@material-ui/icons";
import { RemoveTodolistAC, AddTodoListAC, ChangeTodolistTitleAC, ChangeFinterAC } from './store/todolists-reducer';
import { ChangeTaskTitleAC, ChangeTaskStatusAC, RemoveTaskAC, AddTaskAC } from './store/tasks-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from './store/store';

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

function AppWithRedux() {
    console.log('App With redux')

    const todoLists = useSelector<AppRootStateType, Array<TodoListType>>(state => state.todolists);
    const tasks = useSelector<AppRootStateType, TasksStateType>(state => state.tasks);

    const dispatch = useDispatch();

    const removeTask = useCallback((taskID: string, toDoListID: string) => {
        dispatch(RemoveTaskAC(taskID, toDoListID));
    }, [dispatch]);

    const addTask = useCallback((title: string, toDoListID: string) => {
        dispatch(AddTaskAC(title, toDoListID));
    }, [dispatch])

    const changeTaskStatus = useCallback((taskID: string, isDone: boolean, toDoListID: string) => {
        dispatch(ChangeTaskStatusAC(taskID, isDone, toDoListID));
    }, [dispatch])

    const changeTaskTitle = useCallback((taskID: string, title: string, toDoListID: string) => {
        dispatch(ChangeTaskTitleAC(taskID, title, toDoListID))
    }, [dispatch])

    const changeFilter = useCallback((filter: FilterValuesType, todoListID: string) => {
        dispatch(ChangeFinterAC(todoListID, filter));
    }, [dispatch])

    const changeToDoListTitle = useCallback((title: string, todoListID: string) => {
        dispatch(ChangeTodolistTitleAC(title, todoListID));
    }, [dispatch])

    const removeTodoList = useCallback((todoListID: string) => {
        dispatch(RemoveTodolistAC(todoListID));
    }, [dispatch])

    const addTodoList = useCallback((title: string) => {
        dispatch(AddTodoListAC(title));
    }, [dispatch])

    const todoListsComponents = todoLists.map(t => {
        let tasksForRender: Array<TaskType> = tasks[t.id];

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

export default AppWithRedux;
