
import { ReactNode, useEffect } from "react"

interface Props {
    isOpen: boolean
    onClose: () => void
    children: ReactNode
}

const Modal = ({ isOpen, onClose, children }: Props) => {

    const handleOutsideClick = (_e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        onClose()
    }

    const handleInsideClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation()
    }

    const handleEscKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose()
    }

    useEffect(() => {

        window.addEventListener("keydown", handleEscKey)
        
        return () => {
            window.removeEventListener("keydown", handleEscKey)
        }
        
    }, [])

    if (!isOpen) return null
    
    const responsiveClasses = ``

    return (
        
        <div onClick={handleOutsideClick} 

            className="
                fixed inset-0 flex items-center
                justify-center bg-black bg-opacity-60
            "
        >
            <div onClick={handleInsideClick} className={`
                relative rounded-lg bg-neutral-900
                ${responsiveClasses}
                w-screen-5/6 md:w-screen-3/4 h-screen-3/4 py-20 px-16
                xl:w-screen-3/5 xl:h-screen-3/4 xl:py-32 xl:px-28
            `}>

                <button onClick={onClose} className="absolute top-0 right-0 m-4 mr-5">
                    <i className="text-neutral-200 bi bi-x-lg text-xl"></i>
                </button>

                {children}

            </div>

        </div>
    )
}

export default Modal
