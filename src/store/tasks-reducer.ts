
import { TasksStateType, TaskType } from '../App'
import { v1 } from 'uuid';
import { AddTodoListAT } from './todolists-reducer';

type RemoveTaskAT = {
    type: 'REMOVE-TASK'
    taskID: string,
    toDoListID: string
}

type AddTaskAT = {
    type: 'ADD-TASK'
    title: string,
    toDoListID: string
}

type ChangeTaskTitleAT = {
    type: 'CHANGE-TASK-TITLE'
    taskID: string,
    title: string,
    toDoListID: string
}

type ChangeTaskStatusAT = {
    type: 'CHANGE-TASK-STATUS'
    taskID: string,
    isDone: boolean,
    toDoListID: string
}

// type AddStateForNewTodoListAT = ReturnType<typeof AddStateForNewTodoListAC>

export type AllActionType = RemoveTaskAT | AddTaskAT | ChangeTaskTitleAT | ChangeTaskStatusAT | AddTodoListAT;


export const RemoveTaskAC = (taskID: string, toDoListID: string): RemoveTaskAT => {
    return { type: 'REMOVE-TASK', taskID, toDoListID } as const;
}

export const AddTaskAC = (title: string, toDoListID: string): AddTaskAT => {
    return { type: 'ADD-TASK', title, toDoListID } as const;
}

export const ChangeTaskTitleAC = (taskID: string, title: string, toDoListID: string): ChangeTaskTitleAT => {
    return { type: 'CHANGE-TASK-TITLE', taskID, title, toDoListID } as const;
}

export const ChangeTaskStatusAC = (taskID: string, isDone: boolean, toDoListID: string): ChangeTaskStatusAT => {
    return { type: 'CHANGE-TASK-STATUS', taskID, isDone, toDoListID } as const;
}
export const AddStateForNewTodoListAC = (todoListID: string) => {
    return { type: 'ADD-NEW-STATE-FOR-TODOLIST', todoListID } as const;
}

export const tasksReducer = (tasks: TasksStateType, action: AllActionType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK':
            return { ...tasks, [action.toDoListID]: tasks[action.toDoListID].filter(task => task.id !== action.taskID) };

        case 'ADD-TASK':
            const newTask: TaskType = {
                id: v1(),
                title: action.title,
                isDone: false,
            }
            return ({
                ...tasks,
                [action.toDoListID]: [newTask, ...tasks[action.toDoListID]]
            });

        case 'CHANGE-TASK-TITLE':
            return {
                ...tasks,
                [action.toDoListID]: tasks[action.toDoListID].map(t => t.id === action.taskID ? { ...t, title: action.title } : t)
            };

        case 'CHANGE-TASK-STATUS':
            return {
                ...tasks,
                [action.toDoListID]: tasks[action.toDoListID].map(t => t.id === action.taskID ? { ...t, isDone: action.isDone } : t)
            };
        case 'ADD-TODOLIST':
            return {
                ...tasks,
                [action.todoListID]: [],
            }

        default:
            return tasks;
    }

}