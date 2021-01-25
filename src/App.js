import React from 'react';

import Panel from './Components/Panel';
import ImageCircle from './Components/ImageCircle';
import HelloCard from './Components/HelloCard';

import './app.css';
import profilepic from './images/profilepic.png';

function App() {
    return (
        <>
            <Panel color="light">
                <ImageCircle source={profilepic} />
                <HelloCard />
            </Panel>
            <Panel color="dark">Hi</Panel>
        </>
    );
}

export default App;
