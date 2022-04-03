import React, { useState } from 'react';
import Chanel from './Chanel';
import './App.css';
import ControlBar from './ControlBar';

const App = () => {
  const [timePassed, setTimePassed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isLoopOn, setIsLoopOn] = useState(false);
  
  const LENGTH_OF_TRACK = 10; // Track length in seconds

  const IntervalFunc = (stop = false) => {
      let startInterval = setInterval(() => {
        if (stop) {
          clearInterval(startInterval);
        } else if (isLoopOn && timePassed === LENGTH_OF_TRACK) {
          setTimePassed(0);
        } else if (timePassed < LENGTH_OF_TRACK) {
          setTimePassed(timePassed => parseInt(timePassed+1));
        } else {
          setTimePassed(0);
          setIsRunning(false);
          clearInterval(startInterval);
        }
      }, 1000)
  }

  const handlePlayClick = () => {
    if (!isRunning) {
      IntervalFunc();
      setIsRunning(true);  
    }
  };

  const handleStopClick = () => {
    IntervalFunc(true);
    setTimePassed(0);
    setIsRunning(false);
  };

  const handleChanelTimeChange = (e) => {
    setTimePassed(parseInt(e.target.value));
  }

  return (
    <div id="main-container">
        <h1>Loop Machine</h1>
        <Chanel timePassed={timePassed} handleChanelTimeChange={handleChanelTimeChange} LENGTH_OF_TRACK={LENGTH_OF_TRACK} />
        <Chanel timePassed={timePassed} handleChanelTimeChange={handleChanelTimeChange} LENGTH_OF_TRACK={LENGTH_OF_TRACK} />
        <Chanel timePassed={timePassed} handleChanelTimeChange={handleChanelTimeChange} LENGTH_OF_TRACK={LENGTH_OF_TRACK} />
        <Chanel timePassed={timePassed} handleChanelTimeChange={handleChanelTimeChange} LENGTH_OF_TRACK={LENGTH_OF_TRACK} />
        <Chanel timePassed={timePassed} handleChanelTimeChange={handleChanelTimeChange} LENGTH_OF_TRACK={LENGTH_OF_TRACK} />
        <Chanel timePassed={timePassed} handleChanelTimeChange={handleChanelTimeChange} LENGTH_OF_TRACK={LENGTH_OF_TRACK} />
        <Chanel timePassed={timePassed} handleChanelTimeChange={handleChanelTimeChange} LENGTH_OF_TRACK={LENGTH_OF_TRACK} />
        <Chanel timePassed={timePassed} handleChanelTimeChange={handleChanelTimeChange} LENGTH_OF_TRACK={LENGTH_OF_TRACK} />
        <Chanel timePassed={timePassed} handleChanelTimeChange={handleChanelTimeChange} LENGTH_OF_TRACK={LENGTH_OF_TRACK} />
        <ControlBar 
          handlePlayClick={handlePlayClick}
          handleStopClick={handleStopClick}
          timePassed={timePassed}
          handleChanelTimeChange={handleChanelTimeChange}
          LENGTH_OF_TRACK={LENGTH_OF_TRACK}
          isLoopOn={isLoopOn}
          setIsLoopOn={setIsLoopOn}
        />
    </div>
  )
}

export default App