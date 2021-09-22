import axios from 'axios'

const instance = axios.create({
        baseURL: 'https://social-network.samuraijs.com/api/1.1/',
        withCredentials: true,
        headers: {
            // Не забываем заменить API-KEY на собственный
            'API-KEY': '49ab6c75-ab9e-4861-b120-5af838a1df3c'
        }
    }
)

type ResponseType<D> = {
    resultCode: number
    messages: Array<string>
    data: D
}


type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}

export type TaskType = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}

export type UpdateTaskModelType = {
    title: string
    description: string
    status: number
    priority: number
    startDate: string
    deadline: string
}

type GetTasksResponse = {
    error: string | null
    totalCount: number
    items: TaskType[]
}


export const todolistAPI = {
    updateTodolist(todolistId: string, title: string) {
        return instance.put<ResponseType<{}>>(`todo-lists/${todolistId}`, {title: title})
    },
    deleteTodolist(todolistId: string) {
        const promise = instance.delete<ResponseType<{}>>(`todo-lists/${todolistId}`)
        return promise
    },
    createNewTodolist(title: string) {
        const promise = instance.post<ResponseType<{ item: TodolistType }>>('todo-lists', {title: title})
        return promise
    },
    getAllTodolists() {
        const promise = instance.get<ResponseType<{}>>('todo-lists')
        return promise
    },
    getTasks(todolistId: string) {
        const promise = instance.get<GetTasksResponse>(`todo-lists/${todolistId}/tasks`)
        return promise
    },
    deleteTask(todolistId: string, taskId: string) {
        const promise = instance.delete<GetTasksResponse>(`todo-lists/${todolistId}/tasks/${taskId}`)
        return promise
    },
    createNewTask(todolistId: string, taskTitle: string) {
        const promise = instance.post<ResponseType<TaskType>>(`todo-lists/${todolistId}/tasks`, {title: taskTitle})
        return promise
    },
    updateTask(todolistId: string, taskId: string, model: UpdateTaskModelType) {
        const promise = instance.put<ResponseType<{}>>(`/todo-lists/${todolistId}/tasks/${taskId}`, model)
        return promise
    },
}
