import React from 'react';
import './ControlBar.css';
import { FaPlay, FaStop } from 'react-icons/fa';
import Slider from './UI/Slider';


const ControlBar = ({handlePlayClick, handleStopClick, timePassed, handleChanelTimeChange, isLoopOn, setIsLoopOn, LENGTH_OF_TRACK}) => {
  return (
    <div id="control-bar">
        <span id="play-stop-btns-container">
          <FaPlay className="control-bar-btn" id="FaPlay" onClick={handlePlayClick}/>
          <FaStop className="control-bar-btn" id="FaStop" onClick={handleStopClick}/>
        </span>
        <span id="loop-btn-container">
            <label id="loop-label" htmlFor="loop-btn">Loop</label>
            <Slider name={"loop-btn"} checkedProp={isLoopOn} isLoopOn={isLoopOn} setIsLoopOn={setIsLoopOn}/>
        </span>
        <input 
          type="range"
          className="chanel-cursor"
          name="chanel-cursor"
          title="Chanel Cursor"
          min="0"
          step="1"
          max={LENGTH_OF_TRACK}
          defaultValue={timePassed}
          onMouseUp={handleChanelTimeChange}
        />
    </div>
    
  )
}

export default ControlBar