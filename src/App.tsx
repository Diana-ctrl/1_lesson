import React from 'react';
import './App.css';
import ToDoList from './ToDoList';
import { useState } from 'react';
import { v1 } from 'uuid';

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean,
}
type TodoListType = {
    id: string,
    title: string,
    filter: FilterValuesType,
}
type TasksStateType = {
    [key: string]: Array<TaskType>
}
export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {
    const toDoList_1 = v1();
    const toDoList_2 = v1();

    let [tasks, setTasks] = useState<TasksStateType>({
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
    // let [filter, setFilter] = useState<FilterValuesType>('all')

    const removeTask = (taskID: string, toDoListID: string) => {
        setTasks({ ...tasks, [toDoListID]: tasks[toDoListID].filter(task => task.id !== taskID) });
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
    const changeFilter = (filter: FilterValuesType, todoListID: string) => {
        setTodoLists(todoLists.map(t => t.id === todoListID ? { ...t, filter } : t));
    }
    const removeTodoList = (todoListID: string) => {
        setTodoLists(todoLists.filter(t => t.id !== todoListID));
        delete tasks[todoListID];
    }

    const todoListsComponents = todoLists.map(t => {
        let tasksForRender: Array<TaskType> = tasks[t.id];
        if (t.filter === 'active') {
            tasksForRender = tasks[t.id].filter(t => t.isDone === false)
        } else if (t.filter === 'completed') {
            tasksForRender = tasks[t.id].filter(t => t.isDone === true)
        }
        return (
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
            />)

    })
    return (
        <div className='App'>
            {todoListsComponents}
        </div>
    )
}


export default App;
