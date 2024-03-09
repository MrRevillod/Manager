
import { Task } from "../types"
import { create } from "zustand"
import { addTask, deleteTask, updateTask } from "../lib/TaskServices"
import { readTextFile } from "@tauri-apps/api/fs"
import { documentDir } from "@tauri-apps/api/path"

interface TaskStore {

    tasks: any[]
    categorie: string

    setTasks: (taks: any[]) => void
    setCategorie: (categorie: string) => void

    useAddTask: (task: Task) => Promise<void>
    useDeleteTask: (task: Task) => Promise<void>
    useUpdateTask: (task: Task) => Promise<void>
    useGetTasks: () => void
}

export const useTaskStore = create<TaskStore>((set, get) => ({

    tasks: [],
    categorie: "All Tasks",

    setTasks: (tasks: any[]) => set({ tasks }),
    setCategorie: (categorie: string) => set({ categorie }),

    useAddTask: async (task: Task) => {

        try {
            await addTask(task)
        } catch (error) {
            console.error(`Error on the useAddTask hook: ${error} `)
        }
    },

    useDeleteTask: async (task: Task) => {

        try {
            await deleteTask(task)
        } catch (error) {
            console.error(`Error on the useDeleteTask hook: ${error} `)
        }
    },

    useUpdateTask: async (task: Task) => {

        try {
            await updateTask(task)
        } catch (error) {
            console.error(`Error on the useUpdateTask hook: ${error} `)
        }
    },

    useGetTasks: async () => {

        try {

            const documentsDir = await documentDir()

            const appTasks = JSON.parse(
                await readTextFile(`${documentsDir}manager-app/tasks.json`)
            )

            set({ tasks: appTasks })

            if (get().categorie === "Important") set({
                tasks: get().tasks.filter((task: Task) => task.important === true)
            })

            if (get().categorie === "Completed") set({
                tasks: get().tasks.filter((task: Task) => task.completed === true)
            })

        } catch (error) {
            console.error(`Error on the useGetTask hook: ${error} `)
        }
    }
}))