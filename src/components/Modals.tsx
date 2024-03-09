
import { Modal } from "./ui/Modal"
import { NewTaskModal } from "./NewTask"
import { useModalStore } from "../context/ModalsContext"
import { UpdateTaskModal } from "./UpdateTask"
import { TaskDetailsModal } from "./TaskDetails"

const SettingsModal = () => {

    const { modals, setModal } = useModalStore()

    return (

        <Modal
            isOpen={modals.settings}
            onClose={() => setModal('settings', false, null)}
        >
            <div className="w-full h-full flex items-center justify-center gap-8 flex-col">
                <h1 className="text-5xl font-bold text-neutral-200">Settings panel</h1>
            </div>
        </Modal>
    )
}

export const Modals = () => {

    return (

        <>
            <NewTaskModal />
            <TaskDetailsModal />
            <SettingsModal />
            <UpdateTaskModal />
        </>
    )
}
