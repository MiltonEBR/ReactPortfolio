import React from 'react';

export default function SkillCard(props) {
    return (
        <div className="skill-card">
            {props.children}
            <h2>{props.title}</h2>
            <p>{props.txt}</p>
        </div>
    );
}
