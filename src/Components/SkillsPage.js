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
                        I am currently getting into <span className="keyword-dark">machine learning</span> with Python.
                    </p>
                </SkillCard>

                <SkillCard title="Web Dev" svg={<WebSvg className="skill-svg" />}>
                    <p>
                        I have a decent <span className="keyword-dark">FullStack knowledge</span>, mainly applied using the <span className="keyword-dark">MERN</span> stack.
                        <br /><br />
                        I've just began using <span className="keyword-dark">TypeScript</span> as I find statically typed languages to be safer and fun to work with.
                    </p>
                </SkillCard>

                <SkillCard title="Game Dev" svg={<GameSvg className="skill-svg" />}>
                    <p>
                        I have prototyped games in <span className="keyword-dark">Unity</span> using{' '}
                        <span className="keyword-dark">C#.</span>
                        <br /> <br />
                        My first game was developed in <span className="keyword-dark">Java</span> without any game focused libraries.
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
