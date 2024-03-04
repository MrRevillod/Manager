
import moment from "moment"
import Modal from "./ui/Modal"

import { useEffect } from "react"
import { useModals } from "../context/ModalsContext"
import { Inputs, Task, newTaskSchema } from "../types"

import { useTask } from "../context/TaskContext"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, SubmitHandler } from "react-hook-form"

import { TextInput, CheckBox, CalendarInput, ClockInput } from "./ui/Input"

import { v4 as uuid } from "uuid"

export const UpdateTaskModal = () => {

    const { useUpdateTask } = useTask()
    const { task, modals, setModal } = useModals()

    const { register, handleSubmit, formState: { errors }, reset, setValue, setError } = useForm<Inputs>({
        resolver: zodResolver(newTaskSchema),
    })

    useEffect(() => {
        if (task && modals.taskUpdate) {
            setValue("title", task.title)
            setValue("description", task.description)
            setValue("completed", task.completed)
            setValue("important", task.important)
            setValue("course", task.course)
            setValue("endsAt", moment(task.endsAt, "dddd, DD/MM/YYYY").format("YYYY-MM-DD"))
            setValue("timeEnd", moment(task.endsAt, "dddd, DD/MM/YYYY - HH:mm").format("HH:mm"))
        }
    }, [task, modals.taskUpdate, setValue])
    
    const onSubmit: SubmitHandler<Inputs> = async (formData: Inputs) => {

        const endsAt = moment(`${formData.endsAt} ${formData.timeEnd}`, 'YYYY-MM-DD HH:mm')

        if (endsAt.isBefore(moment())) {
            setError('endsAt', { message: 'End date and time must be in the future' })
            console.log('End date and time must be in the future')
            return
        }

        const update: Task = {
            id: task?.id || uuid(),
            title: formData.title,
            description: formData.description,
            completed: formData.completed,
            important: formData.important,
            course: formData.course,
            startAt: moment().format('dddd, DD/MM/YYYY'),
            endsAt: endsAt.format('dddd, DD/MM/YYYY - HH:mm'),
        }

        await useUpdateTask(update)
        setModal("taskUpdate", false, null)
    }

    return (

        <Modal
            isOpen={modals.taskUpdate}
            onClose={() => { reset(); setModal("taskUpdate", false, null) }}
        >{
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
        }
        </Modal>
    )
}
