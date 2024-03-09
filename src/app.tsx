
import { TaskCard } from "./components/TaskCard"
import { useEffect } from "react"
import { useAppState } from "./context/AppContext"
import { useTaskStore } from "./context/TaskContext"
import { Each } from "./components/Each"

export const App = () => {

    const { createAppdata } = useAppState()
    const { tasks, useGetTasks } = useTaskStore()

    useEffect(() => { createAppdata() }, [])
    useEffect(() => { useGetTasks() }, [tasks])

    return (

        <section className="
            overflow-y-scroll grid lg:grid-cols-2 
            xl:grid-cols-2 2xl:grid-cols-4 md:grid-cols-1 gap-4 w-full my-8
        ">

            <Each
                items={tasks} renderItem={task => {
                    return <TaskCard
                        id={task.id}
                        title={task.title}
                        description={task.description}
                        completed={task.completed}
                        important={task.important}
                        startAt={task.startAt}
                        endsAt={task.endsAt}
                        course={task.course}
                    />
                }}
            />

        </section>
    )
}
