import React from 'react';

const Timer = ({timePassed}) => {
    let minuets = timePassed > 59 ? Math.floor(timePassed / 60) : 0;
    let seconds = timePassed > 59 ? Math.floor(timePassed % 60  ) : timePassed;
    console.log(seconds);
    let minuetsToDisplay = minuets / 10 > 0 && minuets > 9 ? minuets : `0${minuets}`;
    let secondsToDisplay = seconds / 10 > 0 && seconds > 9 ? seconds : `0${seconds}`;
    return (
        <div className="chanel-timer">{minuetsToDisplay}:{secondsToDisplay}</div>
    )
};

export default Timer;