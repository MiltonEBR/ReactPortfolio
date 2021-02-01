import React from 'react';

import Title from './Title';
import Project from './Project';
import Button from './Button';

import { scrollTo } from './scrollTo';

import { projectsData } from './projectsData';

export default function ProjectsPage() {
    return (
        <div className="many-holder">
            <Title txt="Side" keyword="Projects 🔬" color="light"></Title>
            <div className="projects">
                {projectsData.map((project, i) => {
                    const { title, desc, img, link } = project;
                    return (
                        <Project ttl={title} img={img} link={link}>
                            {desc}
                        </Project>
                    );
                })}
            </div>
            <Button
                txt="Contact"
                design="simple-light"
                action={() => {
                    scrollTo('contact');
                }}
            />
        </div>
    );
}
