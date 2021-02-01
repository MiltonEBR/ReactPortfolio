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
                        I have knowledge on <span className="keyword-dark">OOP</span>,{' '}
                        <span className="keyword-dark">Data Structures</span> and{' '}
                        <span className="keyword-dark">Algorithms</span>, used mainly on Java.
                    </p>
                </SkillCard>

                <SkillCard title="Web Dev" svg={<WebSvg className="skill-svg" />}>
                    <p>
                        I have experience in <span className="keyword-dark">backend</span> with Java
                        and Node.js
                        <br />
                        <br />
                        With frontend <span className="keyword-dark">knowledge</span> on React,
                        HTML, CSS and Sass
                    </p>
                </SkillCard>

                <SkillCard title="Game Dev" svg={<GameSvg className="skill-svg" />}>
                    <p>
                        I have prototyped games on <span className="keyword-dark">Unity</span> using{' '}
                        <span className="keyword-dark">C#</span> and I'm currently learning{' '}
                        <span className="keyword-dark">Godot</span> with
                        <span className="keyword-dark"> C++</span> and
                        <span className="keyword-dark"> GDScript</span>.
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
