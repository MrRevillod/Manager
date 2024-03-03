
import { useTask } from "../context/TaskContext"
import { useModals } from "../context/ModalsContext"

const Navbar = () => {

    const menuItems = [{
        title: "All Tasks",
        icon: "bi-list-task"
    },
    {
        title: "Important",
        icon: "bi-exclamation-triangle"
    },
    {
        title: "Completed",
        icon: "bi-check2-all"
    }]
    
    return (

        <nav className="
            bg-primary-dark h-full min-w-20 w-20 max-w-20 py-8 
            hidden md:flex flex-col justify-between items-start text-neutral-200
        ">
            <section className="
                flex flex-row items-center 
                justify-center px-8 gap-4 w-full min-h-12
            ">
                <i className="text-3xl bi bi-person-workspace"></i>
            </section>

            <ul className="flex flex-col w-full">

                {menuItems.map(({ title, icon }, index) => {
                    return (
                        <MenuItem key={index} title={title} icon={icon} />
                    )
                })}

            </ul>

            <ul className="flex flex-col w-full">
                <Settings />
            </ul>

        </nav>
    )
}

interface MenuItemProps {
    title: string
    icon: string
}

const MenuItem = ({ title, icon }: MenuItemProps) => {

    const { categorie, setCategorie } = useTask()

    const handleClick = () => {
        setCategorie(title)
    }

    const classes = `
        flex flex-row xl:justify-start justify-center items-center 
        gap-2 cursor-pointer px-8 py-4 hover:bg-primary transition-all ease-in-out duration-300
        ${categorie === title ? "bg-primary menu-item-selected relative" : "bg-primary-dark"}
    `

    return (
        <li onClick={handleClick} className={classes}>
            <i className={`${icon} text-xl`}></i>
        </li>
    )
}

const Settings = () => {

    const { modals, setModal } = useModals()

    const handleOpen = () => {
        setModal('settings', true, null)
    }

    const classes = `
        flex flex-row xl:justify-start justify-center items-center 
        gap-2 cursor-pointer px-8 py-4 hover:bg-primary transition-all ease-in-out duration-300
        ${modals.settings ? "bg-primary menu-item-selected relative" : "bg-primary-dark"}
    `

    return (

        <li onClick={handleOpen} className={classes}>
            <i className="bi bi-gear-wide-connected text-xl"></i>
        </li>
    )
}

export default Navbar

