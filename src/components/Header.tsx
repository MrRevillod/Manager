
import { useTaskStore } from "../context/TaskContext"
import { useModalStore } from "../context/ModalsContext"

export const Header = () => {

    const { setModal } = useModalStore()
    const { categorie } = useTaskStore()

    const handleAddTask = () => setModal("taskPanel", true, null)

    return (

        <header className="w-full flex flex-row justify-between items-center min-h-12 pt-1">

            <h1 className="text-neutral-200 text-3xl font-semibold">{categorie}</h1>

            <div className="flex flex-row gap-4">

                <button onClick={handleAddTask}
                    className="text-neutral-200 text-2xl font-bold">
                    <i className="bi bi-plus-lg"></i>
                </button>

            </div>

        </header>
    )
}
