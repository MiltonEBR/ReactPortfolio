import React from 'react';

import Title from './Title';
import Project from './Project';
import Button from './Button';

import { scrollTo } from './scrollTo';

import cato from '../images/cato.jpg';

export default function ProjectsPage() {
    return (
        <div className="many-holder">
            <Title txt="Side" keyword="Projects 🔬" color="light"></Title>
            <div className="projects">
                <Project ttl="Project example" img={cato}>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,
                    adipisci velit… Neque porro quisquam est qui dolorem ipsum
                </Project>
                <Project ttl="Project example" img={cato}>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,
                    adipisci velit… Neque porro quisquam est qui dolorem ipsum
                </Project>
                <Project ttl="Project example" img={cato}>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,
                    adipisci velit… Neque porro quisquam est qui dolorem ipsum
                </Project>
                <Project ttl="Project example" img={cato}>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,
                    adipisci velit… Neque porro quisquam est qui dolorem ipsum
                </Project>
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
