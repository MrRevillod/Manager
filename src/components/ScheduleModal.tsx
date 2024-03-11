
import { Modal } from "./ui/Modal"
import { useModalStore } from "../context/ModalsContext"
import { useAppState } from "../context/AppContext"
import { useEffect } from "react"

export const ScheduleModal = () => {

    const { schedulePicture } = useAppState()
    const { modals, setModal } = useModalStore()

    useEffect(() => { console.log(schedulePicture) }, [])

    return (

        <Modal
            isOpen={modals.schedule}
            onClose={() => setModal("schedule", false, null)}
        >
            <div className="flex flex-col items-center justify-center 2xl:-m-16">
                <img src={schedulePicture} alt="Schedule" className="w-full h-full rounded-md" />
            </div>
        </Modal>
    )
}