
import moment from "moment"

import { Modal } from "./ui/Modal"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTaskStore } from "../context/TaskContext"
import { useModalStore } from "../context/ModalsContext"
import { Inputs, newTaskSchema } from "../types"
import { useForm, SubmitHandler } from "react-hook-form"
import { TextInput, CheckBox, CalendarInput, ClockInput } from "./ui/Input"

import { v4 as uuid } from "uuid"

export const NewTaskModal = () => {

    const { useAddTask } = useTaskStore()
    const { modals, setModal } = useModalStore()

    const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>({
        resolver: zodResolver(newTaskSchema),
    })

    const onSubmit: SubmitHandler<Inputs> = async (formData: Inputs) => {

        const endsAt = moment(`${formData.endsAt} ${formData.timeEnd}`, "YYYY-MM-DD HH:mm")

        const task = {
            id: uuid(),
            title: formData.title,
            description: formData.description,
            completed: formData.completed,
            important: formData.important,
            course: formData.course,
            startAt: moment().format("dddd, DD/MM/YYYY"),
            endsAt: endsAt.format("dddd, DD/MM/YYYY - HH:mm"),
        }

        await useAddTask(task)
        setModal("taskPanel", false, null)
    }

    return (

        <Modal
            isOpen={modals.taskPanel}
            onClose={() => { reset(); setModal("taskPanel", false, null) }}
        >
            <div className="h-full w-full text-neutral-200 flex flex-col gap-10 justify-center">

                <h1 className="text-3xl font-bold">Add a new task</h1>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">

                    <TextInput
                        label="Title"
                        name="title"
                        register={register}
                        error={errors.title?.message}
                        placeholder="e.g. Create a REST API"
                    />

                    <div className="w-full flex flex-row gap-4">

                        <TextInput
                            label="Description"
                            name="description"
                            register={register}
                            error={errors.description?.message}
                            placeholder="e.g. Backend API for the task manager app"
                        />

                        <TextInput
                            label="Course"
                            name="course"
                            register={register}
                            error={errors.course?.message}
                            placeholder="e.g. Math 101"
                        />

                    </div>

                    <div className="w-full flex flex-row gap-4">

                        <CalendarInput
                            label="Date to end"
                            name="endsAt"
                            register={register}
                            error={errors.endsAt?.message}
                        />

                        <ClockInput
                            label="Time to end"
                            name="timeEnd"
                            register={register}
                            error={errors.timeEnd?.message}
                        />

                    </div>

                    <div className="flex flex-col justify-start gap-6">

                        <div className="flex flex-row justify-between gap-4">

                            <CheckBox
                                label="Mark as completed"
                                name="completed"
                                register={register}
                                error={errors.completed?.message}
                            />

                            <CheckBox
                                label="Mark as important"
                                name="important"
                                register={register}
                                error={errors.important?.message}
                            />

                        </div>

                    </div>

                    <button
                        type="submit"
                        className="bg-neutral-200 text-neutral-950 rounded-lg p-2 font-bold mt-4"
                    >
                        Add task
                    </button>

                </form>
            </div>
        </Modal>
    )
}
