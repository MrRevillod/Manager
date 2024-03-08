
import Modal from "./ui/Modal"

import { useModals } from "../context/ModalsContext"
import { NewTaskModal } from "./NewTask"
import { TaskDetailsModal } from "./TaskDetails"
import { UpdateTaskModal } from "./UpdateTask"

const SettingsModal = () => {

    const { modals, setModal } = useModals()

    return (

        <Modal
            isOpen={modals.settings}
            onClose={() => setModal('settings', false, null)}
        > 
            <div className="w-full h-full flex items-center justify-center">
                <h1 className="text-5xl font-bold text-neutral-200">Settings panel</h1>
            </div>
        </Modal>
    )
}

export const Modals = () => {

    return (

        <>
            <NewTaskModal/>
            <TaskDetailsModal />
            <SettingsModal />
            <UpdateTaskModal />
        </>
    )
}
