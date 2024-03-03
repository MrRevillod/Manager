
export const StatusPill = ({ completed }: { completed: boolean }) => {

    const status = completed ? "Completed" : "Pending"
    const color = completed ? "bg-green-900" : !completed ? "bg-red-900" : "bg-gray-500"

    return (
        <p className={`${color} px-4 py-1 rounded-xl w-28 text-center`}>{status}</p>
    )
}