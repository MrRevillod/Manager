
import { useModals } from "../context/ModalsContext"
import { useTask } from "../context/TaskContext"

const Header = () => {

    const { setModal } = useModals()
    const { categorie } = useTask()

    const handleAddTask = () => {
        setModal('taskPanel', true, null)
    }

    return (

        <header className="w-full flex flex-row justify-between items-center min-h-12 pt-1">

            <h1 className="text-neutral-200 text-2xl font-semibold">{categorie}</h1>
            
            <button onClick={handleAddTask}
                className="text-neutral-200 text-2xl font-bold">

                <i className="bi bi-plus-lg"></i>

            </button>

        </header>
    )
}

export default Header