
import Modal from "./ui/Modal"

import { useModals } from "../context/ModalsContext"
import { NewTaskModal } from "./NewTask"
import { TaskDetailsModal } from "./TaskDetails"
import { UpdateTaskModal } from "./UpdateTask"
import { useForm } from "react-hook-form"

const SettingsModal = () => {

    const { modals, setModal } = useModals()
    const { register, handleSubmit } = useForm()

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (

        <Modal
            isOpen={modals.settings}
            onClose={() => setModal('settings', false, null)}
        > 
            <div className="w-full h-full flex items-center justify-center gap-8 flex-col">
                <h1 className="text-5xl font-bold text-neutral-200">Settings panel</h1>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
                    <input type="file" {...register('file')} className="text-neutral-200"/>
                    <button type="submit" className="bg-neutral-200 text-neutral-950 rounded-lg h-8">submit</button>
                </form>

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
