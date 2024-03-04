
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
            <div className="">
                <h1>Settings panel</h1>
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
