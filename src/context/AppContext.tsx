
import { create } from "zustand"

import { exists } from "@tauri-apps/api/fs"
import { documentDir } from "@tauri-apps/api/path"
import { writeTextFile, createDir, readTextFile } from "@tauri-apps/api/fs"

import { useTask } from "../context/TaskContext"

export interface AppState {
    applicationDir: string
    profilePicture: string
    createAppdata: () => void
    readAppdata: () => void
}

export const useAppState = create<AppState>((set, get) => ({

    applicationDir: "",
    profilePicture: "",

    createAppdata: async () => {

        const documentPath = await documentDir()
        const appDataPath = `${documentPath}manager-app`

        if (!await exists(appDataPath)) {
            
            await createDir(appDataPath)

            await writeTextFile(`${appDataPath}/tasks.json`, 
                JSON.stringify([])
            )

            await writeTextFile(`${appDataPath}/settings.json`, 
                JSON.stringify([])
            )
        }

        set({ applicationDir: appDataPath })
    },

    readAppdata: async () => {

        const { setTasks } = useTask() 

        const applicationDir = get().applicationDir
        const createAppdata = get().createAppdata

        if (!await exists(applicationDir)) {
            createAppdata()
        }

        const tasksData = JSON.parse(
            await readTextFile(`${applicationDir}/tasks.json`)
        )

        setTasks(tasksData)
    }
}))