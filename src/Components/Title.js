import React from 'react';

export default function Title(props) {
    const color = props.color === 'light' || props.color === 'dark' ? props.color : 'light';

    return (
        <h1 className="ttl-txt">
            {props.txt + ' '}
            <span className={`keyword-${color}`}>{props.keyword}</span>
        </h1>
    );
}
