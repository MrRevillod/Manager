
import { UseFormRegister } from "react-hook-form"

interface TextInputProps {
    label: string
    name: string
    register: UseFormRegister<any>
    error?: string
    placeholder: string
}

interface CheckBoxProps {
    label: string
    name: string
    register: UseFormRegister<any>
    error?: string
}

interface CalendarInputProps {
    label: string
    name: string
    register: UseFormRegister<any>
    error?: string
}

export const TextInput = ({ label, name, register, error, placeholder }: TextInputProps) => {

    const classes = `bg-neutral-800 border-1 border-neutral-600 rounded-lg p-2
        focus:outline-none focus:ring-2 focus:ring-neutral-500
        h-12 w-full pl-4 placeholder-neutral-400 text-neutral-100
    `

    return (

        <div className="flex flex-col gap-3 w-full">

            <label htmlFor={name} className="text-lg font-semibold text-neutral-100">
                {label}
            </label>

            <input id={name} {...register(name)} className={classes} type="text" placeholder={placeholder} />
            {error && <p className="text-red-500 text-sm">{error}</p>}

        </div>
    )
}

export const CheckBox = ({ label, name, register, error }: CheckBoxProps) => {

    return (

        <div className="flex flex-col gap-2 w-full justify-start">

            <div className="flex flex-row gap-3">

                <input id={name} {...register(name)} type="checkbox"
                    className="h-6 w-6 rounded-lg border-2 border-neutral-600"
                />

                <label htmlFor={name} className="text-base font-semibold text-neutral-100">
                    {label}
                </label>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

        </div>
    )
}

export const CalendarInput = ({ label, name, register, error }: CalendarInputProps) => {

    return (

        <div className="flex flex-col gap-2 w-full">
            <h4 className="text-lg font-semibold text-neutral-100">
                {label}
            </h4>

            <input id={name} {...register(name)} type="date"
                className="bg-neutral-800 border-1 border-neutral-600 rounded-lg p-2
                focus:outline-none focus:ring-2 focus:ring-neutral-500
                h-12 w-full pl-4 placeholder-neutral-400 text-neutral-100"
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    )
}

export const ClockInput = ({ label, name, register, error }: CalendarInputProps) => {

    return (

        <div className="flex flex-col gap-2 w-full">
            <h4 className="text-lg font-semibold text-neutral-100">
                {label}
            </h4>

            <input id={name} {...register(name)} type="time"
                className="bg-neutral-800 border-1 border-neutral-600 rounded-lg p-2
                focus:outline-none focus:ring-2 focus:ring-neutral-500
                h-12 w-full pl-4 placeholder-neutral-400 text-neutral-100"
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    )
}
