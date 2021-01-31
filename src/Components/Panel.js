import React from 'react';
import { ScrollElement } from 'react-scroll';

function Panel(props) {
    let color;
    if (props.color === 'dark') {
        color = 'dark';
    } else {
        color = 'light';
    }

    return (
        <section
            className={`panel ${color}${props.size === 'small' ? ' small' : ''}`}
            name={props.name}
        >
            {props.children}
        </section>
    );
}

export default ScrollElement(Panel);
