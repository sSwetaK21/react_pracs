import React, { useState, useEffect } from "react";


function Timer() {

    const [minutes, setMinutes] = useState(5);
    const [seconds, setSeconds] = useState(0);

    var timer;

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        timer = setInterval(() => {
            if (seconds === 0) {
                if (minutes !== 0) {
                    setSeconds(59);
                    setMinutes(minutes - 1);

                }
            } else {
                setSeconds(seconds - 1)
            }
        }, 1000);

        return () => clearInterval(timer)
    }, [seconds])

    const restart = () => {
        setMinutes(5);
        setSeconds(0)
    }

    const stop = () => {
        clearInterval(timer)
    }
    return (
        <div className="cont">
            <div className="timer">
                <h1>Timer</h1>
                <h2>{minutes<10 ? "0"+ minutes : minutes} : {seconds<10? "0"+ seconds : seconds   }</h2>

                <button className="Start" onClick={restart}>Restart</button>
                <button className="reset" onClick={stop}>Stop</button>
            </div>
        </div>
    );
}

export default Timer