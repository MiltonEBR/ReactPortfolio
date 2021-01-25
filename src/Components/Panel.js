import React from 'react';

function Panel(props) {
    let color;
    if (props.color === 'dark') {
        color = 'dark';
    } else {
        color = 'light';
    }

    return <section className={`panel ${color}`}>{props.children}</section>;
}

export default Panel;
