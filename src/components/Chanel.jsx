import React from 'react';
import './Chanel.css';
import MuteSlider from './MuteSlider';
import Timer from './Timer';

const Chanel = ({timePassed, handleChanelTimeChange, LENGTH_OF_TRACK}) => {
  return (
    <div className={"chanel-line"}>
        <MuteSlider />
        <Timer timePassed={timePassed} />
        <input 
          type="range"
          className="chanel-cursor"
          name="chanel-cursor"
          title="Chanel Cursor"
          min="0"
          step="1"
          max={LENGTH_OF_TRACK}
          value={timePassed}
          onMouseUp={handleChanelTimeChange}
        />
    </div>
  )
}

export default Chanel