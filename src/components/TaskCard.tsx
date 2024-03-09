
import { Task } from "../types"
import { useTaskStore } from "../context/TaskContext"
import { useModalStore } from "../context/ModalsContext"

export const TaskCard = (task: Task) => {

    const { title, description, completed, important, course } = task

    const status = completed ? "Completed" : "Pending"
    const color = completed ? "bg-green-900" : !completed ? "bg-red-900" : "bg-gray-500"

    const { setModal } = useModalStore()
    const { useDeleteTask } = useTaskStore()

    const handleDelete = async () => {
        await useDeleteTask(task)
    }

    const viewTaskDetails = () => {
        setModal("taskDetails", true, task)
    }

    const handleUpdate = () => {
        setModal("taskUpdate", true, task)
    }

    return (

        <div className="text-neutral-200 flex flex-col justify-between cursor-pointer
            gap-4 p-4 bg-neutral-800 border-1 border-neutral-700 rounded-lg relative
        ">

            <button onClick={viewTaskDetails} className="absolute top-0 right-0 m-4 mx-5 -p-4">
                <i className="bi bi-arrows-angle-expand"></i>
            </button>

            <div className="flex flex-col gap-2 mr-8">
                <h2 className="text-xl font-bold truncate">{title}</h2>
                <p className="text-base truncate">{description}</p>
            </div>

            <div>
                <p className="font-semibold">{course}</p>
            </div>

            <div className="flex justify-between flex-row">

                <div className="flex flex-row gap-2 w-2/3">
                    <p className={`${color} px-4 py-1 rounded-xl w-1/2 text-center`}>{status}</p>
                    {important && <p className={`bg-yellow-700 px-4 py-1 rounded-xl w-1/2 text-center`}>Important</p>}
                </div>

                <div className="flex flex-row gap-4 items-center justify-center">
                    <button onClick={handleUpdate}>
                        <i className="bi bi-pencil-square"></i>
                    </button>
                    <button onClick={handleDelete}>
                        <i className="bi bi-trash2-fill"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}