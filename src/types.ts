
import { z } from "zod"

export interface Task {
    id: string
    title: string
    description: string
    completed: boolean
    important: boolean
    course: string
    startAt: string
    endsAt: string
}

export type OptionalTask = Task | null

export type Inputs = {
    title: string
    description: string
    course: string
    endsAt: string
    timeEnd: string
    completed: boolean
    important: boolean
}

export const newTaskSchema = z.object({
    title: z.string()
        .min(3, { message: 'Title must be at least 3 characters long' })
        .max(50, { message: 'Title must be at most 100 characters long' }),

    description: z.string()
        .min(3, { message: 'Description must be at least 3 characters long' })
        .max(200, { message: 'Description must be at most 200 characters long' }),

    course: z.string()
        .min(3, { message: 'Course must be at least 3 characters long' })
        .max(50, { message: 'Course must be at most 50 characters long' }),

    endsAt: z.string()
        .refine((date) => {
            const now = new Date()
            const inputDate = new Date(date)
            return inputDate.getTime() >= now.getTime()

        }, {
            message: 'End date must be in the future'
        }),

    timeEnd: z.string(),
    completed: z.boolean(),
    important: z.boolean(),
})

