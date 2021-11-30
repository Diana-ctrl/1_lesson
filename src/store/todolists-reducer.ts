
import { TodoListType, FilterValuesType } from '../App'
import { v1 } from 'uuid';

type RemoveTodoListAT = {
    type: 'REMOVE-TODOLIST'
    id: string
}

type AddTodoListAT = {
    type: 'ADD-TODOLIST'
    title: string
}

type ChangeTodolistTitleAT = {
    type: 'CHANGE-TODOLIST-TITLE'
    title: string,
    id: string
}

type ChangeFinterAT = {
    type: 'CHANGE-TODOLIST-FILTER'
    filter: FilterValuesType
    id: string
}

export type AllACType = ChangeFinterAT | ChangeTodolistTitleAT | AddTodoListAT | RemoveTodoListAT;


export const RemoveTodolistAC = (id: string): RemoveTodoListAT => {
    return { type: 'REMOVE-TODOLIST', id }
}

export const AddTodoListAC = (title: string): AddTodoListAT => {
    return { type: 'ADD-TODOLIST', title }
}

export const ChangeTodolistTitleAC = (id: string, title: string): AddTodoListAT => {
    return { type: 'ADD-TODOLIST', title }
}

export const ChangeFinterAC = (id: string, filter: FilterValuesType): ChangeFinterAT => {
    return { type: 'CHANGE-TODOLIST-FILTER', id, filter }
}


export const todolistsReducer = (todoLists: Array<TodoListType>, action: AllACType): Array<TodoListType> => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return todoLists.filter(t => t.id !== action.id);
        case 'ADD-TODOLIST':
            const newTodoList: TodoListType = {
                id: v1(),
                title: action.title,
                filter: 'all'
            }
            return ([...todoLists, newTodoList])

        case 'CHANGE-TODOLIST-TITLE':
            return todoLists.map(t => t.id === action.id ?
                { ...t, title: action.title } : t);

        case 'CHANGE-TODOLIST-FILTER':
            return todoLists.map(t => t.id === action.id ? { ...t, filter: action.filter } : t)

        default:
            return todoLists;
    }

}