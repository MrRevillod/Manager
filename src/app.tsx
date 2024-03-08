
import { useTask } from "./context/TaskContext"
import { TaskCard } from "./components/TaskCard"
import { useEffect } from "react"
import { useAppState } from "./context/AppContext"

export const App = () => {

    const { tasks } = useTask()

    const createAppdata = useAppState(state => state.createAppdata)
    const readAppdata = useAppState(state => state.readAppdata)

    useEffect(() => {

        createAppdata()
        readAppdata()

    }, [])

    return (

        <section className="
            overflow-y-scroll grid lg:grid-cols-2 
            xl:grid-cols-2 2xl:grid-cols-4 md:grid-cols-1 gap-4 w-full my-8
        ">

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
