import React from 'react';

import Title from './Title';
import SkillCard from './SkillCard';
import Button from './Button';

import { ReactComponent as CardSvg } from '../images/browser.svg';

export default function SkillsPage() {
    return (
        <div className="skills-holder">
            <Title txt="My" keyword="Skills 🔨" />
            <div className="cards">
                <SkillCard
                    title="Sample text"
                    txt="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit…"
                >
                    <CardSvg className="skill-svg" />
                </SkillCard>

                <SkillCard
                    title="Sample text"
                    txt="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit…"
                >
                    <CardSvg className="skill-svg" />
                </SkillCard>

                <SkillCard
                    title="Sample text"
                    txt="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit…"
                >
                    <CardSvg className="skill-svg" />
                </SkillCard>
            </div>
            <Button txt="Projects" design="simple-dark" />
        </div>
    );
}
