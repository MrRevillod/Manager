
import { ReactNode, Dispatch, SetStateAction, useEffect } from "react"
import { useState, useContext, createContext } from "react"
import { Task } from "../types"
import { addTask, deleteTask, updateTask } from "../lib/TaskServices"

import { documentDir } from "@tauri-apps/api/path"
import { readTextFile } from "@tauri-apps/api/fs"

interface TaskContextType {
    tasks: any[]
    setTasks: Dispatch<SetStateAction<any[]>>
    categorie: string
    setCategorie: Dispatch<SetStateAction<string>>
    useAddTask: (task: Task) => Promise<void>
    useDeleteTask: (task: Task) => Promise<void> 
    useUpdateTask: (task: Task) => Promise<void>
    useGetTasks: () => void
}

const initialTaskContext: TaskContextType = {
    tasks: [],
    setTasks: () => {},
    categorie: "All Tasks",
    setCategorie: () => {},
    useAddTask: async () => {},
    useDeleteTask: async () => {},
    useUpdateTask: async () => {},
    useGetTasks: async () => {},
}

interface Props {
    children: ReactNode
}

export const TaskContext = createContext<TaskContextType>(initialTaskContext)
export const useTask = () => useContext(TaskContext)

export const TaskProvider = ({ children }: Props) => {

    const [tasks, setTasks] = useState<any[]>([])
    const [categorie, setCategorie] = useState("All Tasks")

    const useAddTask = async (task: Task) => {

        try {
            await addTask(task)
            setTasks([...tasks, task])
        } catch (error) {
            console.error(error)
        }
    }

    const useDeleteTask = async (task: Task) => {

        try {
            await deleteTask(task)
        } catch (error) {
            console.error(error)
        }
    }

    const useUpdateTask = async (task: Task) => {

        try {
            await updateTask(task)

            console.log("Task updated successfully!")
        } catch (error) {
            console.error(error)
        }
    }

    const useGetTasks = async () => {

        try {
            
            const documentPath = await documentDir()
            const appDataPath = `${documentPath}/manager-app`
            const tasksData = JSON.parse(await readTextFile(`${appDataPath}/tasks.json`))
            setTasks(tasksData)

            if (categorie === "Important") {
                setTasks(tasks.filter((task: Task) => task.important === true))
            }

            if (categorie === "Completed") {
                setTasks(tasks.filter((task: Task) => task.completed === true))
            }
        
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        
        useGetTasks()

    }, [tasks])

    return (
        <TaskContext.Provider 
            value={{ 
                tasks, 
                setTasks,
                categorie,
                setCategorie,
                useAddTask,
                useDeleteTask,
                useUpdateTask,
                useGetTasks,
            }}
        >
            { children }
        </TaskContext.Provider>
    )
}