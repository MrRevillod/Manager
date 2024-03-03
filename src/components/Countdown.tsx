
import moment from "moment"

import { useEffect, useState } from "react"

interface CountdownProps {
    targetDate: string
}

export const Countdown = ({ targetDate }: CountdownProps) => {
    
    const [timeRemaining, setTimeRemaining] = useState('')

    useEffect(() => {
        
        const intervalId = setInterval(() => {
            
            const now = moment()
            const endsAt = moment(targetDate, 'dddd, DD/MM/YYYY - HH:mm')
            const duration = moment.duration(endsAt.diff(now))

            const days = Math.floor(duration.asDays())
            const hours = duration.hours()
            const minutes = duration.minutes()
            const seconds = duration.seconds()

            setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`)

        }, 1000)

        return () => clearInterval(intervalId)

    }, [targetDate])

    return <h3>{timeRemaining}</h3>
}
