import React, {useEffect, useState} from 'react'
import axios from "axios";
import {todolistAPI, UpdateTaskModelType} from "../api/todolist-api";

// const settings = {
//     withCredentials: true,
//     headers: {
//         'API-KEY': '49ab6c75-ab9e-4861-b120-5af838a1df3c'
//     }
// }

export default {
    title: 'API'
}


export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.getAllTodolists()
            .then((res) => {
                setState(res.data)
            })
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    const [todolistTitle, setTodolistTitle] = useState<any>(null)
    const createTodolist = () => {
        const todolistTitle = 'ITO NEW TODO!'
        todolistAPI.createNewTodolist(todolistTitle)
            .then((res) => {
                setState(res.data)
            })
    }

    return <div> {JSON.stringify(state)}
        <div>
            <input placeholder={"todolistTitle"} value={todolistTitle} onChange={(event => {
                setTodolistTitle(event.currentTarget.value)
            })}/>
            <button onClick={createTodolist}>create todolist</button>
        </div>
    </div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistTitle] = useState<any>(null)
    const deleteTodolist = () => {
        todolistAPI.deleteTodolist(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }

    return <div> {JSON.stringify(state)}
        <input placeholder={"todolistId"} value={todolistId} onChange={(event => {
            setTodolistTitle(event.currentTarget.value)
        })}/>
        <button onClick={deleteTodolist}>delete todolist</button>
    </div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<any>(null)
    const [todolistTitle, setTodolistTitle] = useState<any>(null)
    const updateTodolistTitle = () => {
        todolistAPI.updateTodolist(todolistId, todolistTitle)
            .then((res) => {
                setState(res.data)
            })
    }
    return <div> {JSON.stringify(state)}
        <input placeholder={"todolistId"} value={todolistId} onChange={(event => {
            setTodolistId(event.currentTarget.value)
        })}/>
        <input placeholder={"todolistTitle"} value={todolistTitle} onChange={(event => {
            setTodolistTitle(event.currentTarget.value)
        })}/>
        <button onClick={updateTodolistTitle}>update todolist</button>
    </div>
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>("")
    const getTasks = () => {
        todolistAPI.getTasks(todolistId)
            .then((res) => {
                setState(res.data.items)
            })
    }

    return <div> {JSON.stringify(state)}
        <div>
            <input placeholder={"todolistId"} value={todolistId} onChange={(event => {
                setTodolistId(event.currentTarget.value)
            })}/>
            <button onClick={getTasks}>get tasks</button>
        </div>
    </div>
}

export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    const [taskId, setTaskId] = useState<string>("")
    const [todolistId, setTodolistId] = useState<string>("")
    const deleteTask = () => {
        todolistAPI.deleteTask(todolistId, taskId)
            .then((res) => {
                setState(res.data.items)
            })
    }

    return <div> {JSON.stringify(state)}
        <div>
            <input placeholder={"todolistId"} value={todolistId} onChange={(event => {
                setTodolistId(event.currentTarget.value)
            })}/>
            <input placeholder={"taskId"} value={taskId} onChange={(event => {
                setTaskId(event.currentTarget.value)
            })}/>
            <button onClick={deleteTask}>delete task</button>

        </div>


    </div>
}


//---------------------------------------------------------------------------------------------

export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    const [title, setTitle] = useState<string>('title 1')
    const [description, setDescription] = useState<string>('description 1 ')
    const [status, setStatus] = useState<number>(0)
    const [priority, setPriority] = useState<number>(0)
    const [startDate, setStartDate] = useState<string>("")
    const [deadline, setDeadline] = useState<string>("")
    const [taskId, setTaskId] = useState<string>("")

    const [todolistId, setTodolistId] = useState<string>("")
    const updateTask = () => {
        todolistAPI.updateTask(todolistId, taskId, {
                deadline: "",
                description: description,
                priority: priority,
                startDate: "",
                status: status,
                title: title
            }
        )
            .then((res) => {
                setState(res.data)
            })
    }

    return <div> {JSON.stringify(state)}
        <div>
            <input placeholder={"taskId"} value={taskId} onChange={(event => {
                setTaskId(event.currentTarget.value)
            })}/>
            <input placeholder={"todolistId"} value={todolistId} onChange={(event => {
                setTodolistId(event.currentTarget.value)
            })}/>
            <input placeholder={"taskTitle"} value={title} onChange={(event => {
                setTitle(event.currentTarget.value)
            })}/>
            <input placeholder={"Description"} value={description} onChange={(event => {
                setDescription(event.currentTarget.value)
            })}/>
            <input placeholder={"Status"} value={status} type="number" onChange={(event => {
                setStatus(+event.currentTarget.value)
            })}/>
            <input placeholder={"Priority"} value={priority} type="number" onChange={(event => {
                setPriority(+event.currentTarget.value)
            })}/>
            <button onClick={updateTask}>update task</button>

        </div>


    </div>
}


//---------------------------------------------------------------------------------------------


export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    const [taskTitle, setTaskTitle] = useState<string>("")
    const [todolistId, setTodolistId] = useState<string>("")

    const createTask = () => {
        todolistAPI.createNewTask(todolistId, taskTitle)
            .then((res) => {
                setState(res.data)
            })
    }

    return <div> {JSON.stringify(state)}
        <div>
            <input placeholder={"todolistId"} value={todolistId} onChange={(event => {
                setTodolistId(event.currentTarget.value)
            })}/>
            <input placeholder={"taskTitle"} value={taskTitle} onChange={(event => {
                setTaskTitle(event.currentTarget.value)
            })}/>
            <button onClick={createTask}>update task</button>
        </div>
    </div>

}