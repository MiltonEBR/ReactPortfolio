import React from 'react';

export default function SkillCard(props) {
    return (
        <div className="skill-card">
            {props.svg}
            <h2>{props.title}</h2>
            {props.children}
        </div>
    );
}
