
import { useState } from "react"

interface ProfilePictureProps {
    username: string
    imgSrc: string
}

export const ProfilePicture = ({ username, imgSrc }: ProfilePictureProps) => { 
    
    const [showTooltip, setShowTooltip] = useState(false)

    return (

        <div className="relative">
            <button className="rounded-full" onClick={() => setShowTooltip(true)}>
                <img src={imgSrc} alt="Profile picture" />
            </button>

            {showTooltip && (
                <div className="absolute top-12 right-0 bg-neutral-800 p-4 rounded-md shadow-lg">
                    <p className="text-neutral-200">{username}</p>
                </div>
            )}

        </div>
    )
}
