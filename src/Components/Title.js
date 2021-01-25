import React from 'react';

export default function Title(props) {
    return (
        <h1 className="ttl-txt">
            {props.txt + ' '}
            <span className="keyword">{props.keyword}</span>
        </h1>
    );
}
