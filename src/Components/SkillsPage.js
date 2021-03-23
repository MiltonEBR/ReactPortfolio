import React from 'react';

import Title from './Title';
import SkillCard from './SkillCard';
import Button from './Button';

import { scrollTo } from './scrollTo';

import { ReactComponent as WebSvg } from '../images/browser.svg';
import { ReactComponent as CSSvg } from '../images/code.svg';
import { ReactComponent as GameSvg } from '../images/game.svg';

export default function SkillsPage() {
    return (
        <div className="many-holder">
            <Title txt="My" keyword="Skills 🔨" color="dark" />
            <div className="cards">
                <SkillCard title="Computer Science" svg={<CSSvg className="skill-svg" />}>
                    <p>
                        I have vast experience with <span className="keyword-dark">OOP</span>,{' '}
                        <span className="keyword-dark">Data Structures</span> and{' '}
                        <span className="keyword-dark">Algorithms</span>.
                        <br />
                        <br />
                        Applied mainly on Java.
                    </p>
                </SkillCard>

                <SkillCard title="Web Dev" svg={<WebSvg className="skill-svg" />}>
                    <p>
                        I like working on <span className="keyword-dark">frontend </span> by using
                        React, HTML, CSS and Sass
                        <br />I have basic knowledge on how to work with{' '}
                        <span className="keyword-dark">backend</span> using Node.js
                    </p>
                </SkillCard>

                <SkillCard title="Game Dev" svg={<GameSvg className="skill-svg" />}>
                    <p>
                        I have prototyped games in <span className="keyword-dark">Unity</span> using{' '}
                        <span className="keyword-dark">C#.</span>
                        <br />
                        Im currently learning <span className="keyword-dark">C++</span> in order to
                        use it with Unreal Engine.
                    </p>
                </SkillCard>
            </div>
            <Button
                txt="Projects"
                design="simple-dark"
                action={() => {
                    scrollTo('projects');
                }}
            />
        </div>
    );
}
