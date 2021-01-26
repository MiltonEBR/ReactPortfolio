import React from 'react';

function Panel(props) {
    let color;
    if (props.color === 'dark') {
        color = 'dark';
    } else {
        color = 'light';
    }

    return (
        <section className={`panel ${color}${props.size === 'small' ? ' small' : ''}`}>
            {props.children}
        </section>
    );
}

export default Panel;
