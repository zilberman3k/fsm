import {useMemo, useRef} from "react";

/**
 * Returns css style classes for traffic light by state.
 * @param currentState
 * @returns {{yellowClass: string, redClass: string, greenClass: string}}
 */
const useTrafficStyles = (currentState) => {
    const redClass = useRef(''),
        yellowClass = useRef(''),
        greenClass = useRef('');
    useMemo(() => {
        switch (currentState) {
            case 'red':
                redClass.current = 'red on';
                yellowClass.current = 'yellow';
                greenClass.current = 'green';
                break;
            case 'redAndYellow':
                redClass.current = 'red on';
                yellowClass.current = 'yellow on';
                greenClass.current = 'green';
                break;
            case 'green':
                redClass.current = 'red';
                yellowClass.current = 'yellow';
                greenClass.current = 'green on';
                break;
            case 'blinkingYellow':
                redClass.current = 'red';
                yellowClass.current = 'yellow blink';
                greenClass.current = 'green';
                break;
            default:break;
        }

    }, [currentState]);
    return {redClass: redClass.current, yellowClass: yellowClass.current, greenClass: greenClass.current}
};
export default useTrafficStyles;