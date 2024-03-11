
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

                <label className="inline-flex items-center cursor-pointer">
                    <input id={name} {...register(name)} type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>

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
