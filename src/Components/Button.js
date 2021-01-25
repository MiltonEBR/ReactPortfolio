import React from 'react';

function Button(props) {
    const design = props.design;

    if (design === 'light' || design === 'dark') {
        return (
            <div className="btn-holder">
                <span className={`btn-shadow-${design}`}></span>
                <button type="button" className={`btn btn-${design}`}>
                    {props.txt}
                </button>
            </div>
        );
    } else if (design === 'simple-light' || design === 'simple-dark') {
        return (
            <button type="button" className={`btn btn-${design}`}>
                {props.txt}
            </button>
        );
    } else {
        return (
            <button type="button" className="btn">
                {props.txt}
            </button>
        );
    }
}

export default Button;
