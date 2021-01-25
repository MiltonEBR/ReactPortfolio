import React from 'react';

function Panel(props) {
    console.log(props.color);
    return (
        <section className="panel" style={{ backgroundColor: props.color }}>
            {props.children}
        </section>
    );
}

export default Panel;
