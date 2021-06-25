import { useState, useEffect } from "react"

export default function Clock() {
    const [now, setNow] = useState(new Date())
    const [hour, setHour] = useState(now.getHours())
    const [minute, setMinute] = useState(now.getMinutes())
    const [second, setSecond] = useState(now.getSeconds())
    const [intervalHolder, setIntervalHolder] = useState(null)

    useEffect(() => {
        const updateTime = () => {
            setNow(new Date())
            setHour(now.getHours())
            setMinute(now.getMinutes())
            setSecond(now.getSeconds())
        }

        let newInterval = setInterval(updateTime, 1000)

        setIntervalHolder(newInterval)

        return clearInterval(intervalHolder)
    }, [second, intervalHolder, now])

    return (
        <div id="clock">
            <img src="./img/clockface.png" id="face" alt="Clock Face" />
            <img src="./img/hour-hand.png" id="hour" alt="Hour hand" style={{transform: `rotate(${((hour / 12) * 360)}deg)`}} />
            <img src="./img/minute-hand.png" id="minute" alt="Minute hand" style={{transform: `rotate(${((minute / 60) * 360)}deg)`}} />
            <img src="./img/second-hand.png" id="second" alt="Second hand" style={{transform: `rotate(${((second / 60) * 360)}deg)`}} />
        </div>
    )
}