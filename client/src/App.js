import React from "react";
import './styles.scss';
import Header from "./components/Header";
import TrafficLight from "./components/TrafficLight";

/**
 * FSM exercise.
 */
const App = () => {

    return <div className="flex-wrap">
        <Header/>
        <TrafficLight/>
        <div>
            please click on the traffic light...
        </div>
    </div>

};

export default App;