import React from 'react';

import Panel from './Components/Panel';
import HelloPage from './Components/HelloPage';

import './app.css';

function App() {
    return (
        <>
            <Panel color="light">
                <HelloPage />
            </Panel>
            <Panel color="dark">Hi</Panel>
        </>
    );
}

export default App;
