
import { Each } from "./Each"
import { menuItems } from "../lib/data"
import { useTaskStore } from "../context/TaskContext"
import { useModalStore } from "../context/ModalsContext"
import { MenuItem, activeMenuItemClass } from "./ui/MenuItem"

export const Navbar = () => {

    const { modals, setModal } = useModalStore()
    const { categorie, setCategorie } = useTaskStore()

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

                <Each items={menuItems} renderItem={({ title, icon }) => {

                    return <MenuItem
                        key={title}
                        icon={icon}
                        handleClick={() => setCategorie(title)}
                        customClasses={activeMenuItemClass(title === categorie)}
                    />

                }} />

            </ul>

            <ul className="flex flex-col w-full">

                <MenuItem
                    icon="bi bi-calendar-range"
                    handleClick={() => setModal("schedule", true, null)}
                    customClasses={activeMenuItemClass(modals.schedule)}
                />

                <MenuItem
                    icon="bi bi-gear-wide-connected"
                    handleClick={() => setModal("settings", true, null)}
                    customClasses={activeMenuItemClass(modals.settings)}
                />

            </ul>

        </nav>
    )
}
