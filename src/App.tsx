import React from 'react';
import './App.css';
import ToDoList from './ToDoList'

export type TaskType = {
    id: number, 
    title: string, 
    isDone: boolean,
}

function App() {
    const tasks_1: Array<TaskType> = [ // TaskType []
        {id: 1, title: 'HTML', isDone: true}, 
        {id: 1, title: 'CSS', isDone: true}, 
        {id: 1, title: 'React', isDone: false}
    ]
    
    return (
        <div className="App">
            <ToDoList title={'What to learn'} tasks= {tasks_1}/>
           {/* <ToDoList title={'What to buy'}/>*/}
           {/* <ToDoList title={'What to read'}/>*/}
        </div>
    );
}

export default App;
