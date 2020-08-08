import {useReducer} from "react";

async function post(data = {}) {
    return await fetch('/', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({data,timeStamp:Date.now()})
    }).then(q=>q.json());
}

/**
 *
 * @param spec
 * @returns {function(initialState, transitionEvent): state}
 */
const wrapReducer = (spec) => (currentState, event) => {
    const stateTransitions = spec.states[currentState];
    stateTransitions.onExit && stateTransitions.onExit(post); // onExit hook
    const nextState = stateTransitions[event];

    if (!nextState) {
        throw new Error(`no transition for event ${event} in state ${currentState}`);
    }

    spec.states[nextState].onEnter && spec.states[nextState].onEnter(post);

    return nextState;
};

/**
 * Hook returns current state and dispatcher to trigger next transition on each transition.
 * @param spec
 * @returns {[state,dispatch]}
 */
const useFSM = (spec) => {
    const {initialState} = spec;
    return useReducer(wrapReducer(spec), initialState);
};

export default useFSM;