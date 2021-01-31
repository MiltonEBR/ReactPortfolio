import React from 'react';

import Panel from './Components/Panel';
import HelloPage from './Components/HelloPage';
import SkillsPage from './Components/SkillsPage';
import ProjectsPage from './Components/ProjectsPage';
import ContactPage from './Components/ContactPage';

import './App.css';

function App() {
    return (
        <>
            <Panel color="light" name="hello">
                <HelloPage />
            </Panel>
            <Panel color="dark" name="skills">
                <SkillsPage />
            </Panel>
            <Panel color="light" name="projects">
                <ProjectsPage />
            </Panel>
            <Panel color="dark" size="small" name="contact">
                <ContactPage />
            </Panel>
        </>
    );
}

export default App;
