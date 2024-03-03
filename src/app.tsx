

import { documentDir } from "@tauri-apps/api/path"
import { writeTextFile, createDir, readTextFile } from "@tauri-apps/api/fs"

import { exists } from "@tauri-apps/api/fs"

import { useEffect } from "react"
import { useTask } from "./context/TaskContext"

import { TaskCard } from "./components/TaskCard"

export const App = () => {

    const { tasks, setTasks } = useTask()

    useEffect(() => {

        const createAppData = async () => {

            let documentPath = await documentDir()

            console.log(documentPath)

            let appDataPath = `${documentPath}manager-app`

            if (!await exists(appDataPath)) {
                
                await createDir(appDataPath)

                await writeTextFile(`${appDataPath}/tasks.json`, 
                    JSON.stringify([])
                )

                await writeTextFile(`${appDataPath}/settings.json`, 
                    JSON.stringify([])
                )
            }
        }

        const readAppData = async () => {

            let documentPath = await documentDir()
            let appDataPath = `${documentPath}/manager-app`

            let tasksData = JSON.parse(await readTextFile(`${appDataPath}/tasks.json`))

            setTasks(tasksData)
        }

        createAppData()
        readAppData()

    }, [])

    const containerClasses = `
        overflow-y-scroll grid lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 md:grid-cols-1 gap-4 w-full my-8
    `

    return (

        <section className={containerClasses}>

            {tasks.map(task => {
                return (
                    <TaskCard 
                        key={task.id}
                        id={task.id.toString()}
                        title={task.title}
                        description={task.description}
                        completed={task.completed}
                        important={task.important}
                        startAt={task.startAt}
                        endsAt={task.endsAt}
                        course={task.course}
                    />
                )
            })}

        </section>
    )

}



