import React, { useState, useEffect } from 'react'

const CountDown = () => {
    const [time, setTime] = useState(""),
    countdownTimer = () => {
        let countDownDate = new Date("Oct 31, 2021 16:00:00").getTime();
        // 每秒更新
        let timer = setInterval(() => {
            // 現在
            let now = new Date().getTime()

            // 差距
            let distance = countDownDate - now;

            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            let minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
            let seconds = Math.floor(distance % (1000 * 60) / 1000);

            setTime(`${days > 0? days + '天' : ''} ${hours < 10 ? '0'+ hours: hours}:${minutes < 10 ? '0'+ minutes: minutes}:${seconds < 10 ? '0'+ seconds: seconds}`)

            if (distance < 0) {
                clearInterval(timer);
                setTime("00:00:00");
            }
        }, 1000);
    } 

    useEffect(() => {
        countdownTimer();
    },[])

    return (
        <>
            <p>倒數：{time}</p>
        </>
    )
}

export default CountDown
