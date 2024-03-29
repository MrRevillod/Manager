
import { create } from "zustand"
import { OptionalTask, Task } from "../types"

export interface ModalState {
    settings: boolean
    taskPanel: boolean
    taskDetails: boolean
    taskUpdate: boolean
    schedule: boolean
}

export interface StoreState {
    modals: ModalState;
    task?: Task | null;
    setModal: (modal: keyof ModalState, value: boolean, task: OptionalTask) => void
}

export const useModalStore = create<StoreState>((set) => ({

    modals: {
        settings: false,
        taskPanel: false,
        taskDetails: false,
        taskUpdate: false,
        schedule: false,
    },

    task: null,

    setModal: (modal, value, task = null) => {

        set((state) => ({
            modals: {
                ...state.modals,
                [modal]: value,
            },

            task: task
        }))
    },

}))
