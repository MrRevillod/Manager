
interface MenuItemProps {
    icon: string,
    handleClick: () => void
    customClasses: string
}

export const MenuItem = ({ icon, handleClick, customClasses }: MenuItemProps) => {

    const classes = `flex flex-row xl:justify-start justify-center 
        items-center gap-2 cursor-pointer px-8 py-4 hover:bg-primary 
        transition-all ease-in-out duration-300 ${customClasses}
    `

    return (

        <li onClick={handleClick} className={classes}>
            <i className={`${icon} text-xl`}></i>
        </li>
    )
}

export const activeMenuItemClass = (condition: boolean) => {
    return condition ? "bg-primary menu-item-selected relative" : "bg-primary-dark"
}