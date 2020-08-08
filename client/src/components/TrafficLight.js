import React from "react";
import useFSM from "../hooks/useFSM";
import machineStateObject from "../fsm-initial";
import useTrafficStyles from "../hooks/useTrafficStyle";

/**
 * Traffic light main component.
 */
const TrafficLight = () => {
    const [currentState, sendEvent] = useFSM(machineStateObject);
    const {redClass, yellowClass, greenClass} = useTrafficStyles(currentState);

    const changeColor = () => {
        switch (currentState) {
            case 'red':
                sendEvent('RED_AND_YELLOW'); // todo: extract to constants.
                break;
            case 'redAndYellow':
                sendEvent('GREEN');
                break;
            case 'green':
                sendEvent('BLINKING_YELLOW');
                break;
            case 'blinkingYellow':
                sendEvent('RED');
                break;
            default:
                break;
        }

    };

    return <div className='traffic-light' onClick={changeColor}>
        <div className={redClass}/>
        <div className={yellowClass}/>
        <div className={greenClass}/>
    </div>
}

export default TrafficLight;