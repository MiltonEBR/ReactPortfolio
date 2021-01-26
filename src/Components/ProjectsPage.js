import React from 'react';

import Title from './Title';
import Project from './Project';

import cato from '../images/cato.jpg';

export default function ProjectsPage() {
    return (
        <div className="proj-holder">
            <Title txt="Side" keyword="Projects" color="light"></Title>
            <Project ttl="Project example" img={cato} />
        </div>
    );
}
