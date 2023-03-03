import {useEffect, useState} from "react";
import internal from "stream";

export const VideoPlayer = () => {

    const [showEnd, setShowEnd] = useState(false)

    const useTimer = () => {
        const [time, setTime] = useState(0)

        useEffect(() => {
            const interval = setInterval(() => {
                setTime(time + 1)
            }, 1000)

            return () => window.clearInterval(interval)
        }, [time])

        return [time];
    }

    const [time] = useTimer()

    const handleEnded = () => {
        setShowEnd(true)
    }

    return (
        <div>
            {showEnd ? <div>Konec</div> : null}
            {!showEnd ? <div>{time}</div> : null}
            <video
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                autoPlay
                onEnded={handleEnded}
                muted
            />
        </div>
    )
}