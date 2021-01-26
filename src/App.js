import React from 'react';

import Panel from './Components/Panel';
import HelloPage from './Components/HelloPage';
import SkillsPage from './Components/SkillsPage';
import ProjectsPage from './Components/ProjectsPage';

import './app.css';

function App() {
    return (
        <>
            <Panel color="light">
                <HelloPage />
            </Panel>
            <Panel color="dark">
                <SkillsPage />
            </Panel>
            <Panel color="light">
                <ProjectsPage />
            </Panel>
        </>
    );
}

export default App;
