
import Modal from "./ui/Modal"

import { Task } from "../types"
import { Countdown } from "./Countdown"
import { useModals } from "../context/ModalsContext"
import { StatusPill } from "./ui/StatusPill"

export const TaskDetailsModal = () => {

    const { task, modals, setModal } = useModals()

    if (!task) return null

    const { title, description, completed, 
        important, course, startAt, endsAt }: Task = task
    
    return (

        <Modal
            isOpen={modals.taskDetails}
            onClose={() => setModal('taskDetails', false, null)}
        >
            <div className="h-full w-full text-neutral-200 flex flex-col gap-10 justify-center">

                <div className="flex flex-col gap-8">
                    <h1 className="text-4xl font-bold">{title}</h1>
                    <div className="flex flex-row gap-2">
                        <StatusPill completed={completed}/>
                        {important && <p className={`bg-yellow-700 px-4 py-1 rounded-xl w-28 text-center`}>Important</p>}
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <h2 className="text-xl font-semibold">Description</h2>
                    <p className="text-lg">{description}</p>
                </div>

                <div className="flex flex-col gap-1">
                    <h2 className="text-xl font-semibold">Course</h2>
                    <p className="text-lg">{course}</p>
                </div>

                <div className="flex flex-row w-full justify-between gap-2">
                    <div className="flex flex-col gap-2 justify-start items-start">
                        <h3 className="text-lg font-semibold">Start at</h3>
                        <h3>{startAt}</h3>
                    </div>
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <h3 className="text-lg font-semibold">Ends at</h3>
                        <h3>{endsAt}</h3>
                    </div>
                    <div className="flex flex-col gap-2 justify-end items-end">
                        <h3 className="text-lg font-semibold">Time Remaining</h3>
                        <Countdown targetDate={endsAt}/>
                    </div>
                </div>
            </div>
        </Modal>
    )
}