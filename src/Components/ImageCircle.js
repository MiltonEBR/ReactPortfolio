import React from 'react';

function ImageCircle(props) {
    const size = 475;

    return (
        <div className="logo-holder">
            <img
                src={props.source}
                alt=""
                className="logo-image"
                height={size - 100}
                width={size - 100}
            />
            <svg height={size} width={size}>
                <circle cx={size / 2} cy={size / 2} r="220" className="circle-svg" />
            </svg>
        </div>
    );
}

export default ImageCircle;
