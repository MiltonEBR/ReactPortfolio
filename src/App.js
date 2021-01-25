import React from 'react';

import Panel from './Components/Panel';
import HelloPage from './Components/HelloPage';
import Title from './Components/Title';
import SkillCard from './Components/SkillCard';

import { ReactComponent as CardSvg } from './images/browser.svg';

import './app.css';

function App() {
    return (
        <>
            <Panel color="light">
                <HelloPage />
            </Panel>
            <Panel color="dark">
                <Title txt="My" keyword="Skills 🔨" />
                <SkillCard
                    title="Sample text"
                    txt="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit…"
                >
                    <CardSvg className="skill-svg" />
                </SkillCard>
            </Panel>
        </>
    );
}

export default App;
