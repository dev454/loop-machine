import React, {useState} from 'react';
import './Slider.css'

const Slider = ({name, checkedProp, isLoopOn, setIsLoopOn}) => {
    const [isChecked, setIsChecked] = useState(checkedProp);
    const id = name === "loop-btn" ? name : '';
    const title = name === "mute-btn" ? 'Allow to play' : name === "loop-btn" ? 'Loop' : name;
    
    const handleChange = (e) => {
        setIsChecked(isChecked => !isChecked);
        if(id === 'loop-btn') {
            setIsLoopOn(isLoopOn => !isLoopOn)
        }
    }

    return (
        <input 
            className="toggle"
            type="checkbox"
            defaultChecked={isChecked}
            onChange={handleChange}
            id={id}
            name={name}
            title={title}
        />
    )
}

export default Slider;