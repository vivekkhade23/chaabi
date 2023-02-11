import React, { useEffect, useState } from 'react'
import tstyle from "./Timer.module.css";
const Timer = ({handleSubmit}) => {
    const [second, setsecond] = useState(0);
    const [mintues, setmintues] = useState(0);
    const [pause, setpause] = useState(false);

    useEffect(() => {
        let timer = setInterval(() => {
            if (pause) {
                setsecond(second + 1);
                if (second === 59) {
                    setmintues(mintues + 1);
                    setsecond(0);
                }
                if (mintues === 5) {
                  handleSubmit()
                  setsecond(0)
                    setmintues(0);
                }
            }
        }, 1000);

        return () => clearInterval(timer);
    });



    const stop = () => {
        setpause(!pause);
    };

    return (
        <div className={tstyle.maintimer}>
            <div className={tstyle.timer}>
                <h1 className={tstyle.timerh1}>Touch Typing Timer</h1>
                <div className={tstyle.timer_container} >
                    <h1 className={tstyle.headingTimer}>
                        {mintues < 10 ? "0" + mintues : mintues}:
                        {second < 10 ? "0" + second : second}
                    </h1>
                </div>

                <div > <button
                    onClick={stop}
                    style={{
                        backgroundColor: "rgb(232, 113, 97)",
                        height: "50px",
                        width: "150px",
                        fontSize: "20px",
                        marginLeft: "30px",
                        marginTop: "7px",
                        padding: "10px",
                        paddingLeft: "15px",
                        borderRadius: "50%",
                    }}
                >
                    {(!pause) ? "Start Game" : "Pause Game "}
                </button></div>

            </div>
        </div>
    );
}

export default Timer;