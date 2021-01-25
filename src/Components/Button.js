import React from 'react';

function Button(props) {
    return (
        <div className="btn-holder">
            <span className={`btn-shadow-${props.design ? props.design : 'light'}`}></span>
            <button type="button" className={`btn btn-${props.design ? props.design : 'light'}`}>
                {props.txt}
            </button>
        </div>
    );
}

export default Button;
