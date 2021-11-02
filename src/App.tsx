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
export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {
    let [tasks, setTasks] = useState<Array<TaskType>>([
        { id: v1(), title: 'HTML', isDone: true },
        { id: v1(), title: 'CSS', isDone: true },
        { id: v1(), title: 'React', isDone: false },
        { id: v1(), title: 'Redux', isDone: false },
    ])

    let [filter, setFilter] = useState<FilterValuesType>('all')

    const removeTask = (taskID: string) => {
        setTasks(tasks.filter(t => t.id !== taskID));
    };

    const addTask = (title: string) => {
        const newTask: TaskType = {
            id: v1(),
            title, // title: title,
            isDone: false,
        }
        setTasks([newTask, ...tasks]);
    }
    const changeTaskStatus = (taskID: string, isDone: boolean) => {
        setTasks(tasks.map(t => t.id === taskID ? { ...t, isDone } : t));   //isDone = isDone:isDone
    }

    let tasksForRender: Array<TaskType> = tasks;
    if (filter === 'active') {
        tasksForRender = tasks.filter(t => t.isDone === false)
    } else if (filter === 'completed') {
        tasksForRender = tasks.filter(t => t.isDone === true)
    }

    //UI:
    return (
        <div className="App">
            <ToDoList title={'What to learn'} tasks={tasksForRender} filter={filter} removeTask={removeTask} changeFilter={setFilter} addTask={addTask} changeTaskStatus={changeTaskStatus} />
            {/* <ToDoList title={'What to buy'}/>*/}
            {/* <ToDoList title={'What to read'}/>*/}
        </div>
    );
}

export default App;
