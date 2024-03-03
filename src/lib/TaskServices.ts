import { Task } from "../types"

import { documentDir } from "@tauri-apps/api/path"
import { readTextFile, writeTextFile } from "@tauri-apps/api/fs"

export const addTask = async (task: Task) => {

    let documentPath = await documentDir()
    let appDataPath = `${documentPath}/manager-app`

    let tasksData = await readTextFile(`${appDataPath}/tasks.json`)

    let fileTasks = JSON.parse(tasksData)

    fileTasks.push(task)

    await writeTextFile(`${appDataPath}/tasks.json`, 
        JSON.stringify(fileTasks)
    )
}

export const deleteTask = async (task: Task) => {

    let documentPath = await documentDir()
    let appDataPath = `${documentPath}/manager-app`

    let tasksData = await readTextFile(`${appDataPath}/tasks.json`)

    let fileTasks = JSON.parse(tasksData)

    let filteredTasks = fileTasks.filter((t: Task) => t.id !== task.id)

    await writeTextFile(`${appDataPath}/tasks.json`, 
        JSON.stringify(filteredTasks)
    )
}

