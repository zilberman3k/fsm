export default {
    initialState: "red",
    states: {
        red: {
            RED_AND_YELLOW: "redAndYellow", // transition to...
        },
        redAndYellow: {
            GREEN: "green",

        },
        green: {
            BLINKING_YELLOW: "blinkingYellow",
            onEnter(postToServer) {
                console.log('on enter green');
                postToServer({log: 'on enter green'}).then(console.log);
            },
            onExit(postToServer) {
                console.log('on exit green');
                postToServer({log: 'on exit green'}).then(console.log);
            },
        },
        blinkingYellow: {
            RED: 'red'
        }
    }
};